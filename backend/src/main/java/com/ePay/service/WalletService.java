package com.ePay.service;

import com.ePay.model.Wallet;

public interface WalletService {

	public String showBalance(String uniqueId);

	public Wallet addMoneytoWallet(Integer BankId, Long amount, String uniqueId);

	public Wallet transferToBank(Integer BankId, Long amount, String uniqueId);

	public Wallet fundTransfer(String sourceMobileNo, String targetMobileNo, Long amount, String uniqueId);

	public Wallet updateWallet(Wallet wallet);
}
