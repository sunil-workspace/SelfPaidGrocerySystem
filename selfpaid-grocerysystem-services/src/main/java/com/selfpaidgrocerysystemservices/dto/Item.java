package com.selfpaidgrocerysystemservices.dto;

import java.util.Date;

public class Item {

	private String NAME;
	private double PRICE;
	private double WEIGHT;

	public Item() {
		//no-arg constructor
	}

	public Item(String nAME, double pRICE, double wEIGHT) {
		super();
		NAME = nAME;
		PRICE = pRICE;
		WEIGHT = wEIGHT;
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

	public double getWEIGHT() {
		return WEIGHT;
	}

	public void setWEIGHT(double wEIGHT) {
		WEIGHT = wEIGHT;
	}

	@Override
	public String toString() {
		return "Item [NAME=" + NAME + ", PRICE=" + PRICE + ", WEIGHT=" + WEIGHT + "]";
	}

}
