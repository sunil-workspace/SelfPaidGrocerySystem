package com.selfpaidgrocerysystemservices.dto;

public class Item {

	private String id;
	private double price;
	private double weight;

	public Item() {
		//no-arg constructor
	}
	

	public Item(String id, double price, double weight) {
		super();
		this.id = id;
		this.price = price;
		this.weight = weight;
	}


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

}
