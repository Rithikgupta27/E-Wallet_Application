package com.ePay.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Wallet {
	@Id
	private String walletId;
	private boolean kycStatus = false;
	private Long balance;
	@OneToMany(mappedBy = "wallet", cascade = CascadeType.ALL)
	List<BankAccount> banks = new ArrayList<>();

}
