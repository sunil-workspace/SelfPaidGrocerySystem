package com.selfpaidgrocerysystemservices.dto;

import java.sql.Date;

public class ItemSelected {

	private String NAME;
	private double PRICE;
	private int QUANTITY;
	private double WEIGHT;
	private Date PURCHASED_DATE;

	public ItemSelected() {}

	public ItemSelected(String nAME, double pRICE, int qUANTITY, double wEIGHT, Date pURCHASED_DATE) {
		NAME = nAME;
		PRICE = pRICE;
		QUANTITY = qUANTITY;
		WEIGHT = wEIGHT;
		PURCHASED_DATE = pURCHASED_DATE;
	}

	public String getNAME() {
		return NAME;
	}

	public void setNAME(String nAME) {
		NAME = nAME;
	}

	public double getPRICE() {
		return PRICE;
	}

	public void setPRICE(double pRICE) {
		PRICE = pRICE;
	}

	public int getQUANTITY() {
		return QUANTITY;
	}

	public void setQUANTITY(int qUANTITY) {
		QUANTITY = qUANTITY;
	}

	public double getWEIGHT() {
		return WEIGHT;
	}

	public void setWEIGHT(double wEIGHT) {
		WEIGHT = wEIGHT;
	}

	public Date getPURCHASED_DATE() {
		return PURCHASED_DATE;
	}

	public void setPURCHASED_DATE(Date pURCHASED_DATE) {
		PURCHASED_DATE = pURCHASED_DATE;
	}

	@Override
	public String toString() {
		return "ItemsSelected [NAME=" + NAME + ", PRICE=" + PRICE + ", QUANTITY=" + QUANTITY + ", WEIGHT=" + WEIGHT
				+ ", PURCHASED_DATE=" + PURCHASED_DATE + "]";
	}

}


