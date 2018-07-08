package com.selfpaidgrocerysystemservices.service;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public interface PaymentDetailsService {
	
	public JSONObject postPaymentDetailsToDB(String paymentDetails);

}
