package com.selfpaidgrocerysystemservices;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class SelfpaidGrocerysystemServicesApplication {

	@Autowired
    DataSource dataSource;
	
	public static void main(String[] args) {
		SpringApplication.run(SelfpaidGrocerysystemServicesApplication.class, args);
	}
}
