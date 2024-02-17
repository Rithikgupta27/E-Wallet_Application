package com.ePay.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ePay.exception.CustomerException;
import com.ePay.model.Customer;
import com.ePay.model.CustomerSession;
import com.ePay.model.DTO.CustomerLoginDTO;
import com.ePay.model.DTO.CustomerOtpDTO;
import com.ePay.repository.CustomerDao;
import com.ePay.repository.CustomerSessionDao;

//import net.bytebuddy.asm.Advice.Return;
import net.bytebuddy.utility.RandomString;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerDao cDao;

	@Autowired
	private CustomerSessionDao csDao;

	@Override
	public String checkCustomer(CustomerOtpDTO customerOTP) {
		Customer existingCustomer = cDao.findByMobileNumber(customerOTP.getMobileNumber());
		if (existingCustomer != null) {
			// send otp
			String randomString = String.valueOf((int) (Math.random() * 10000));
			return randomString;
		} else {
			throw new CustomerException("Customer already registered, try Logging in");
		}

	}

	@Override
	public String checkNotACustomer(CustomerOtpDTO customerOTP) {
		Optional<Customer> existingCustomerOptional = Optional
				.ofNullable(cDao.findByMobileNumber(customerOTP.getMobileNumber()));
		if (existingCustomerOptional.isEmpty()) {
			// send otp
			String randomString = String.valueOf((int) (Math.random() * 10000));
			return randomString;
		} else {
			throw new CustomerException("Customer already registered, try Logging in");
		}
	}

	@Override
	public Customer createCustomer(Customer customer) {
		Customer existingCustomer = cDao.findByMobileNumber(customer.getMobileNumber());
		if (existingCustomer == null) {
			return cDao.save(customer);
		} else {
			throw new CustomerException("Customer already registered");
		}

	}

	@Override
	public String customerLogin(CustomerLoginDTO customerDto) {
		Customer customer = cDao.findByMobileNumberAndPassword(customerDto.getMobileNumber(),
				customerDto.getPassword());

		if (customer != null) {
			CustomerSession cs = new CustomerSession();
			cs.setCustomer(customer);
			cs.setTimeStamp(LocalDateTime.now());
			String key = RandomString.make(8);
			cs.setUniqueId(key);

			CustomerSession cSession = csDao.save(cs);
			return cSession.toString();

		} else {
			throw new CustomerException("Wrong credentials");
		}
	}

	public String updateCustomerPassword(CustomerLoginDTO customerDto) {
		Customer existingCustomer = cDao.findByMobileNumber(customerDto.getMobileNumber());
		if (existingCustomer != null) {
			System.out.println(customerDto.getPassword());
			existingCustomer.setPassword(customerDto.getPassword());
			cDao.save(existingCustomer);
			return "Password changed successfully.";
		} else {
			return "Customer with mobile number " + customerDto.getMobileNumber() + " not found.";
		}
	}

	@Override
	public String customerLogout(String uniqueId) {
		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {
			csDao.delete(cSession);
			return "Logged out !";
		} else {
			throw new CustomerException("User not logged in with this number!");
		}

	}

	@Override
	public CustomerSession checkCustomerSession(String uniqueId) {
		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {
			return cSession;
		} else {
			return null;
		}
	}

	@Override
	public Customer viewCustomerDetails(String UniqueId) {
		CustomerSession cSession = csDao.findByUniqueId(UniqueId);
		if (cSession != null) {
			Optional<Customer> opt = cDao.findById(cSession.getId());
			Customer customer = opt.get();
			return customer;
		} else {
			throw new CustomerException("User must be logged in!");
		}
	}

}
