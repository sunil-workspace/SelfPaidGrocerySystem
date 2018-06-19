package com.selfpaidgrocerysystemservices.dto;

import java.util.Date;

public class Member {

	private int MEMBERSHIP_NUM;
	private String MEMBERSHIP_NAME;
	private Date MEMBER_INCEPTION_DT;
	private String STATUS;

	public Member() {
		this.MEMBERSHIP_NUM = 100;
	}
	
	public Member(int mEMBERSHIP_NUM, String mEMBERSHIP_NAME, Date mEMBER_INCEPTION_DT, String sTATUS) {
		MEMBERSHIP_NUM = mEMBERSHIP_NUM;
		MEMBERSHIP_NAME = mEMBERSHIP_NAME;
		MEMBER_INCEPTION_DT = mEMBER_INCEPTION_DT;
		STATUS = sTATUS;
	}

	public int getMEMBERSHIP_NUM() {
		return MEMBERSHIP_NUM;
	}
	public void setMEMBERSHIP_NUM(int mEMBERSHIP_NUM) {
		MEMBERSHIP_NUM = mEMBERSHIP_NUM;
	}
	public String getMEMBERSHIP_NAME() {
		return MEMBERSHIP_NAME;
	}
	public void setMEMBERSHIP_NAME(String mEMBERSHIP_NAME) {
		MEMBERSHIP_NAME = mEMBERSHIP_NAME;
	}
	public Date getMEMBER_INCEPTION_DT() {
		return MEMBER_INCEPTION_DT;
	}
	public void setMEMBER_INCEPTION_DT(Date mEMBER_INCEPTION_DT) {
		MEMBER_INCEPTION_DT = mEMBER_INCEPTION_DT;
	}
	public String getSTATUS() {
		return STATUS;
	}
	public void setSTATUS(String sTATUS) {
		STATUS = sTATUS;
	}

	@Override
	public String toString() {
		return "Member [MEMBERSHIP_NUM=" + MEMBERSHIP_NUM + ", MEMBERSHIP_NAME=" + MEMBERSHIP_NAME
				+ ", MEMBER_INCEPTION_DT=" + MEMBER_INCEPTION_DT + ", STATUS=" + STATUS + "]";
	}
	
	

}
