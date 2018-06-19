package com.selfpaidgrocerysystemservices.repo.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.selfpaidgrocerysystemservices.dto.Member;
import com.selfpaidgrocerysystemservices.repo.MembershipRepository;

@Repository
public class MembershipRepositoryImpl implements MembershipRepository{

	@Autowired
	private JdbcTemplate jdbcTemplate;

	/*@Override
	public List<Member> findAllMembers() {

		List<Member> membershipDetails = jdbcTemplate.query("SELECT MEMBERSHIP_NUM, MEMBERSHIP_NAME, MEMBER_INCEPTION_DT, STATUS FROM membership", (rs, rowNum) -> 
		new Member(rs.getInt("MEMBERSHIP_NUM"), rs.getString("MEMBERSHIP_NAME"), rs.getDate("MEMBER_INCEPTION_DT"), rs.getString("STATUS")));

		return membershipDetails;

	}*/
	
	@Override
	public List<Member> findMember(int memberId) {

		List<Member> membershipDetails = jdbcTemplate.query(
				"SELECT MEMBERSHIP_ID, MEMBER_NAME, MEMBER_INCEPTION_DT, STATUS FROM membership_details WHERE MEMBERSHIP_ID = " + memberId + " AND STATUS = 'ACTIVE'",
				(rs, rowNum) -> new Member(rs.getInt("MEMBERSHIP_ID"), rs.getString("MEMBER_NAME"),
						rs.getDate("MEMBER_INCEPTION_DT"), rs.getString("STATUS")));

		return membershipDetails;

	}
}
