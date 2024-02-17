package com.ePay.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ePay.exception.CustomerException;
import com.ePay.model.CustomerSession;
import com.ePay.model.Transaction;
import com.ePay.model.Wallet;
import com.ePay.repository.CustomerSessionDao;
import com.ePay.repository.TransactionDao;

@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	private TransactionDao tDao;

	@Autowired
	@SuppressWarnings(value = { "unused" })
	private WalletService walletService;

	@Autowired
	private CustomerSessionDao csDao;

	@Override
	public Transaction addTransaction12(Transaction trans, String uniqueId) {
		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {
			Wallet wallet = cSession.getCustomer().getWallet();

			// associate
			trans.setWallet(wallet);
			return tDao.save(trans);

		} else {
			throw new CustomerException("User not logged in!");
		}

	}

	@Override
	public List<Transaction> viewAllTransaction(String uniqueId) {

		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {
			Wallet wallet = cSession.getCustomer().getWallet();

			List<Transaction> transactios = tDao.findByWallet(wallet);
			if (transactios.size() == 0) {
				throw new CustomerException("no transactio found");
			} else {
				return transactios;
			}

		} else {
			throw new CustomerException("User not logged in!");
		}

	}

//
//    @Override
//    public List<Transaction> viewTransactionByDate(LocalDateTime from, LocalDateTime to) {
//        List<Transaction> transList = transactionRepository.findByTransactionDateBetween(from, to);
//        if(transList.isEmpty()) {
//            throw new TransactionException("No transactions found for the specified date range");
//        }
//        return transList;
//    }
//
	@Override
	public List<Transaction> viewAllTransactionByType(String type, String uniqueId) {
		CustomerSession cSession = csDao.findByUniqueId(uniqueId);
		if (cSession != null) {

			List<Transaction> transactios = tDao.findByTransactionType(type);
			if (transactios.size() == 0) {
				throw new CustomerException("no transactio found with this type!");
			} else {
				return transactios;
			}

		} else {
			throw new CustomerException("User not logged in!");
		}

	}

}
