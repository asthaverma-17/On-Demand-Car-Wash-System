package com.green.car.wash.company.paymentservice.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.green.car.wash.company.paymentservice.model.TransactionDetails;
import com.green.car.wash.company.paymentservice.service.TransactionService;
import com.razorpay.RazorpayException;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	private TransactionService transactionService;
		
		@GetMapping("/createTransaction/{amount}")
		public TransactionDetails createTransaction(@PathVariable double amount) {
			return transactionService.createTransaction(amount);
		}

}
