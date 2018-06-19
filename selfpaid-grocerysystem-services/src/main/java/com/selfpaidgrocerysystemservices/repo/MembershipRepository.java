package com.selfpaidgrocerysystemservices.repo;

import java.util.List;

import org.springframework.stereotype.Component;

import com.selfpaidgrocerysystemservices.dto.Member;

@Component
public interface MembershipRepository {
	
	//public List<Member> findAllMembers();
	
	public List<Member> findMember(int memberNumber);
	

}
