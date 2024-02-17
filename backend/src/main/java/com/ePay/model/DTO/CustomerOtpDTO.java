package com.ePay.model.DTO;

import lombok.Data;

@Data
public class CustomerOtpDTO {
	private String mobileNumber;

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
}
