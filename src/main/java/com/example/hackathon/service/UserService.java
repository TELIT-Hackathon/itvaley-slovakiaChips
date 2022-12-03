package com.example.hackathon.service;

import com.example.hackathon.model.User;

import java.util.List;

public interface UserService {

    public int getUser();
    public User saveUser(User user);
    public List<User> getAllUsers();
}
