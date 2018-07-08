package com.selfpaidgrocerysystemservices.dto;

import java.sql.Date;

public class Payment {

	private String memberId;
	private String nameOnCard;
	private long cardNumber;
	private Date cardExpiryDate;
	private int securityCode;

	public Payment() {
		//no-arg constructor
	}

	public Payment(String memberId, String nameOnCard, long cardNumber, Date cardExpiryDate, int securityCode) {
		this.memberId = memberId;
		this.nameOnCard = nameOnCard;
		this.cardNumber = cardNumber;
		this.cardExpiryDate = cardExpiryDate;
		this.securityCode = securityCode;
	}

	public String getMemberId() {
		return memberId;
	}

	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	public String getNameOnCard() {
		return nameOnCard;
	}

	public void setNameOnCard(String nameOnCard) {
		this.nameOnCard = nameOnCard;
	}

	public long getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(long cardNumber) {
		this.cardNumber = cardNumber;
	}

	public Date getCardExpiryDate() {
		return cardExpiryDate;
	}

	public void setCardExpiryDate(Date cardExpiryDate) {
		this.cardExpiryDate = cardExpiryDate;
	}

	public int getSecurityCode() {
		return securityCode;
	}

	public void setSecurityCode(int securityCode) {
		this.securityCode = securityCode;
	}

}
