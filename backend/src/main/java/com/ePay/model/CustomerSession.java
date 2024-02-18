package com.ePay.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@Getter
@Setter
@ToString
public class CustomerSession {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

//	@OneToOne
//	@JoinColumn(name = "customer_id")
//	private Customer customer;

	@Column(unique = true)
	private int CustomerId;

	@Column(unique = true)
	private String uniqueId;

	private LocalDateTime timeStamp;

}
