package com.ePay.model.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
class WalletDTO {
	private String walletId;
	private int balance;
	private boolean kycStatus;

}