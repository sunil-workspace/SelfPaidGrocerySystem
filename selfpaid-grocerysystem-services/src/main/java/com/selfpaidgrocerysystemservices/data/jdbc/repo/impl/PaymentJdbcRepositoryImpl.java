package com.selfpaidgrocerysystemservices.data.jdbc.repo.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.selfpaidgrocerysystemservices.data.jdbc.repo.PaymentJdbcRepository;
import com.selfpaidgrocerysystemservices.dto.Payment;

@Repository
public class PaymentJdbcRepositoryImpl implements PaymentJdbcRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public boolean postPaymentDetails(Payment paymentDetails) {

		boolean isInserted = false;
		try {
			String insertSql = "INSERT INTO PAYMENT (MEMBER_ID, NAME_ON_CARD, CARD_NUMBER, CARD_EXPIRY_DATE, SECURITY_DATE) VALUES (?, ?, ?, ?, ?)";
			jdbcTemplate.execute(insertSql);
			isInserted = true;
		} catch(Exception e) {
			e.printStackTrace();
			return isInserted;
		}
		return isInserted;
	}

}
