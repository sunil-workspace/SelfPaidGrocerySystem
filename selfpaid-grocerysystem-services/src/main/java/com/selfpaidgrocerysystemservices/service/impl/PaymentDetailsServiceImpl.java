package com.selfpaidgrocerysystemservices.service.impl;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.selfpaidgrocerysystemservices.data.jdbc.repo.PaymentJdbcRepository;
import com.selfpaidgrocerysystemservices.data.mongo.repo.PaymentMongoRepository;
import com.selfpaidgrocerysystemservices.dto.Payment;
import com.selfpaidgrocerysystemservices.exceptions.SelfCheckoutException;
import com.selfpaidgrocerysystemservices.service.PaymentDetailsService;

@Service
public class PaymentDetailsServiceImpl implements PaymentDetailsService {

	@Autowired
	PaymentJdbcRepository paymentJdbcRepository;

	@Autowired
	PaymentMongoRepository paymentMongoRepository;

	@Override
	public JSONObject postPaymentDetailsToDB(String paymentDetails) {
		JSONObject responseJsonObj = new JSONObject();
		boolean isInserted = false;
		try {
			JSONObject paymentDetailsJsonObj = new JSONObject(paymentDetails);
			Payment payment = new Payment();
			payment.setMemberId("Guest"+new java.util.Date().toString());//This can be based on Member or Guest
			payment.setNameOnCard(paymentDetailsJsonObj.getString(""));
			payment.setCardNumber(Long.parseLong(paymentDetailsJsonObj.getString("")));
			payment.setCardExpiryDate(null);
			payment.setSecurityCode(Integer.parseInt(paymentDetailsJsonObj.getString("")));

			isInserted = paymentJdbcRepository.postPaymentDetails(payment);
			responseJsonObj.put("isInserted", isInserted);

		} catch (SelfCheckoutException | JSONException e) {
			e.printStackTrace();
		}	
		return responseJsonObj;
	}

}
