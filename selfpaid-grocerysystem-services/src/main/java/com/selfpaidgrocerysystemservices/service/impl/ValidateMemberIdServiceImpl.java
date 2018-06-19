package com.selfpaidgrocerysystemservices.service.impl;

import java.util.List;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.selfpaidgrocerysystemservices.dto.Member;
import com.selfpaidgrocerysystemservices.repo.impl.MembershipRepositoryImpl;
import com.selfpaidgrocerysystemservices.service.ValidateMemberIdService;

@Service
public class ValidateMemberIdServiceImpl implements ValidateMemberIdService {

	private static Logger logger = LoggerFactory.getLogger(ValidateMemberIdServiceImpl.class);

	@Autowired
	MembershipRepositoryImpl membershipRepository;

	/*@Override
	public boolean verifyMemberId(int memberNumber) {

		List<Member> list = membershipRepository.findAllMembers();

		list.forEach((member) ->{
			System.out.println(member.toString());
			if(member.getMEMBERSHIP_NUM() == memberNumber && member.getSTATUS().equals("ACTIVE")) {
				return true;
			}
		});
		return false;


		for(Member member: list) {
			System.out.println(member.toString());
			if(member.getMEMBERSHIP_NUM() == memberNumber && member.getSTATUS().equals("ACTIVE")) {
				return true;
			}
		}
		return false;
	}*/

	@Override
	public JSONObject verifyMemberIdNew(int memberNumber) {
		String isValid = "false";
		JSONObject jsonObj = new JSONObject();
		try {
			List<Member> members = membershipRepository.findMember(memberNumber);

			if(members.size()>0) {
				isValid = "true";
			}
			jsonObj.put("isValidMember", isValid);
		} catch(Exception e) {
			e.printStackTrace();
			logger.error("Exception occured in verifyMemberIdNew method " + e.getMessage());
		}
		return jsonObj;
	}



}
