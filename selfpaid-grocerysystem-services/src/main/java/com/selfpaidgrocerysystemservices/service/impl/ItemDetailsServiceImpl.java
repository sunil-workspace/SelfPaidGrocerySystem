package com.selfpaidgrocerysystemservices.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.selfpaidgrocerysystemservices.data.jdbc.repo.ItemJdbcRepository;
import com.selfpaidgrocerysystemservices.data.mongo.repo.ItemMongoRepository;
import com.selfpaidgrocerysystemservices.dto.Item;
import com.selfpaidgrocerysystemservices.dto.ItemSelected;
import com.selfpaidgrocerysystemservices.exceptions.SelfCheckoutException;
import com.selfpaidgrocerysystemservices.service.ItemDetailsService;

@Service
public class ItemDetailsServiceImpl implements ItemDetailsService {

	@Autowired
	ItemJdbcRepository itemJdbcRepository;
	
	@Autowired
	ItemMongoRepository itemMongoRepository;

	/*@Override
	public Item getItemDetailsFromDB(String itemName) {

		List<Item> items = itemRepository.getItemDetails(itemName);

		for(Item item : items) {
			if(item.getITEM_NAME().equals(itemName)) {
				return item;
			}
		}
		return null;
	}*/

	@Override
	public JSONObject getItemDetailsFromDB(String itemName) {
		JSONObject jsonObj = new JSONObject();
		try {
			List<Item> items = itemJdbcRepository.getItemDetails(itemName);

			if(items.size()>0) {
				Item item = items.get(0);

				jsonObj.put("NAME", item.getName());
				jsonObj.put("PRICE", item.getPrice());
				jsonObj.put("QUANTITY", 1);
				jsonObj.put("WEIGHT", item.getWeight());
			}
		} catch(SelfCheckoutException | JSONException e) {
			e.printStackTrace();
		} catch(Exception ex){
			ex.printStackTrace();
		}
		return jsonObj;
	}

	@Override
	public JSONObject postItemDetailsToDB(String itemsDetails) {
		JSONObject responseJsonObj = new JSONObject();
		boolean isInserted = false;
		try {
			JSONObject jsonObj = new JSONObject(itemsDetails);
			JSONArray jsonArr = (JSONArray) jsonObj.get("itemDetails");
			List<ItemSelected> itemsSelectedList = new ArrayList<ItemSelected>();

			for(int i=0; i<jsonArr.length(); i++) {
				JSONObject itemDetails = (JSONObject) jsonArr.get(i);

				ItemSelected itemsSelected = new ItemSelected();
				itemsSelected.setNAME(itemDetails.getString("NAME"));

				String priceStr = (String) itemDetails.get("PRICE");
				itemsSelected.setPRICE(Double.parseDouble(priceStr));

				String quantityStr =  (String) itemDetails.get("QUANTITY");;
				itemsSelected.setQUANTITY(Integer.parseInt(quantityStr));

				String weightStr = (String) itemDetails.get("WEIGHT");
				itemsSelected.setWEIGHT(Double.parseDouble(weightStr));

				java.sql.Date currentSqlDate = new java.sql.Date(Calendar.getInstance().getTime().getTime());
				itemsSelected.setPURCHASED_DATE(currentSqlDate);
				itemsSelectedList.add(itemsSelected);
			}
			isInserted = itemJdbcRepository.postItemDetails(itemsSelectedList);
			responseJsonObj.put("isInserted", isInserted);

		} catch (SelfCheckoutException | JSONException e) {
			e.printStackTrace();
		}	
		return responseJsonObj;
	}

}
