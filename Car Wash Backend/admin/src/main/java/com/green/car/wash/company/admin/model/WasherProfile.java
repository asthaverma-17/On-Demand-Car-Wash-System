package com.green.car.wash.company.admin.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Document(collection ="washers")
public class WasherProfile {
	@Id
	private  String email;

	private String password;
	private String fullName;
	private String status;
	private String phoneNumber;
	private String username;
	private String role;


	public WasherProfile()
	{

	}
	public WasherProfile(String email, String password, String fullName, String status, String phoneNumber,
			String username,String role) {
		super();
		this.email = email;
		this.password = password;
		this.fullName = fullName;
		this.status = status;
		this.phoneNumber = phoneNumber;
		this.username = username;
		this.role=role;
	}


	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Override
	public String toString() {
		return "WasherProfile [email=" + email + ", password=" + password + ", fullName=" + fullName + ", status="
				+ status + ", phoneNumber=" + phoneNumber + ", username=" + username + ", role=" + role + "]";
	}
	
	
	
	


}
