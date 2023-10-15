package com.green.car.wash.company.washer.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.green.car.wash.company.washer.controller.WasherController;
import com.green.car.wash.company.washer.model.WasherProfile;
import com.green.car.wash.company.washer.repository.WasherRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class WasherProfileServiceImpl implements WasherProfileService {
	@Autowired
	private WasherRepository WasherRepo;
	Logger log = LoggerFactory.getLogger(WasherProfileServiceImpl.class);

    // washer can only update his phone number, password and status
	public void updateDetails(WasherProfile details) {
		WasherProfile detail = WasherRepo.findById(details.getEmail())
				.orElseThrow(() -> new RuntimeException(String.format("cannot find emailId %s", details.getEmail())));
		detail.setStatus(details.getStatus());
		detail.setPassword(details.getPassword());
		detail.setPhoneNumber(details.getPhoneNumber());
		WasherRepo.save(details);
	}
	//get all washers
	public List<WasherProfile> getAllWashers() {
//		System.out.println(WasherRepo.findAll());
		List<WasherProfile> listw=WasherRepo.findAll();
		log.info(listw.get(0).getPhoneNumber());
		return WasherRepo.findAll();
	}
	//delete washer by email
	public void deleteById(String email) {
		WasherRepo.deleteById(email);

	}
	//get washer details by full name
	public List<WasherProfile> getWasher(String fullName) {
		System.out.println(fullName);

		return WasherRepo.findAll().stream().filter(x ->x.getFullName().contains(fullName)).collect(Collectors.toList());


	}
}
//// adding washer profile
//public WasherProfile addDetails(WasherProfile details) {
//	return WasherRepo.insert(details);
//}
