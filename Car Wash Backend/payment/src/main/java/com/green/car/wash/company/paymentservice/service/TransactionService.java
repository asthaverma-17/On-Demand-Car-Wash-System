package com.green.car.wash.company.paymentservice.service;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.green.car.wash.company.paymentservice.model.TransactionDetails;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;


@Service
public class TransactionService {
	
	private static final String KEY = "rzp_test_bzC0Vk4jEvsZ0Q";
	private static final String KEY_SECRET = "0IPK8NP1TSOskg354cesuZ69";
	private static final String CURRENCY = "INR";

	public TransactionDetails createTransaction(double amount) {
		try {
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("amount", (amount * 100));
			jsonObject.put("currency", CURRENCY);
			
			
			RazorpayClient razorpayClient = new RazorpayClient(KEY, KEY_SECRET);
			Order order = razorpayClient.orders.create(jsonObject);
//			System.out.println(order);
			return prepareTransactionDetails(order);
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}
	
	private TransactionDetails prepareTransactionDetails(Order order) {
		String orderId = order.get("id");
		String currency = order.get("currency");
		Integer amount = order.get("amount");
		
		TransactionDetails transactionDetails = new TransactionDetails(orderId, currency, amount, KEY);
		return transactionDetails;
	}
}