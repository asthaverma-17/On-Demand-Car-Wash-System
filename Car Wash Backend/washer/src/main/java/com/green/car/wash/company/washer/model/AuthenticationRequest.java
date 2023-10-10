package com.green.car.wash.company.washer.model;

public class AuthenticationRequest {
private String username;
private String password;
private String role;
private String email;
private String fullName;
private String phoneNumber;



public AuthenticationRequest() {


}


public AuthenticationRequest(String username, String password, String role, String email, String fullName,
		String phoneNumber) {
	super();
	this.username = username;
	this.password = password;
	this.role = role;
	this.email = email;
	this.fullName = fullName;
	this.phoneNumber = phoneNumber;
	System.out.println(username+password+role+email+fullName+phoneNumber);
}

public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
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
public String getFullName() {
	return fullName;
}

public void setFullName(String fullName) {
	this.fullName = fullName;
}

public String getPhoneNumber() {
	return phoneNumber;
}

public void setPhoneNumber(String phoneNumber) {
	this.phoneNumber = phoneNumber;
}
@Override
public String toString() {
	return "AuthenticationRequest [username=" + username + ", password=" + password + ", role=" + role + ", email="
			+ email + "]";
}




}
