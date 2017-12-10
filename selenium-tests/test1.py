# -*- coding: utf-8 -*-
"""
Created on Fri Dec  8 19:24:57 2017

@author: Lasse Lindqvist
"""

import sys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
import traceback
import configparser

def register(driver, config):
    sign_up_button = driver.find_element_by_xpath("//a[text()[contains(., 'Sign up')]]")
    sign_up_button.click()
        
    name_input = driver.find_element_by_xpath("//input[@name = 'login']")
    name_input.send_keys(config['REGISTRATION']['name'])
    
    email_input = driver.find_element_by_xpath("//input[@name = 'email']")
    email_input.send_keys(config['REGISTRATION']['email'])
    
    phone_number_input = driver.find_element_by_xpath("//input[@name = 'phoneNumber']")
    phone_number_input.send_keys(config['REGISTRATION']['phone_number'])
    
    password_input = driver.find_element_by_xpath("//input[@name = 'password']")
    password_input.send_keys(config['REGISTRATION']['password'])
    
    name_input = driver.find_element_by_xpath("//input[@name = 'displayName']")
    name_input.send_keys(config['REGISTRATION']['display_name'])
    
    register_button = driver.find_element_by_xpath("//button[text()[contains(., 'Register')]]")
    register_button.click()
    
def create_a_thought(driver, config):
    new_thought_button = driver.find_element_by_xpath("//a[text()[contains(., 'New thought')]]")
    new_thought_button.click()
    
    textarea = driver.find_element_by_xpath("//textarea[@placeholder = 'Your thought...']")
    textarea.send_keys(config['NEW_THOUGHT']['contents'])
    
    post_button = driver.find_element_by_xpath("//button[text()[contains(., 'Post')]]")
    post_button.click()
    
def check_timeline(driver, config):    
    # (1) validates the number of thoughts on timeline
    timeline_button = driver.find_element_by_xpath("//a[text()[contains(., 'Timeline(1)')]]")
    timeline_button.click()
    
def sign_out(driver, config):    
    sign_out_button = driver.find_element_by_xpath("//a[text()[contains(., 'Sign out, " + config['REGISTRATION']['display_name'] + "')]]")
    sign_out_button.click()
    
def sign_in(driver, config):    
    sign_in_button = driver.find_element_by_xpath("//a[text()[contains(., 'Sign in')]]")
    sign_in_button.click()
    
    name_input = driver.find_element_by_xpath("//input[@name = 'login']")
    name_input.send_keys(config['REGISTRATION']['name'])
    
    password_input = driver.find_element_by_xpath("//input[@name = 'password']")
    password_input.send_keys(config['REGISTRATION']['password'])
    
    login_button = driver.find_element_by_xpath("//button[text()[contains(., 'Login')]]")
    login_button.click()
    
def run_test(driver, config):
    driver.get(config['SITE']['url']);
    
    register(driver, config)
    create_a_thought(driver, config)
    check_timeline(driver, config)
    sign_out(driver, config)
    sign_in(driver, config)

def main():
    config = configparser.ConfigParser()
    config.read('test_settings.ini')
        
    firefox_capabilities = DesiredCapabilities.FIREFOX
    firefox_capabilities['marionette'] = True
    driver = webdriver.Firefox(capabilities=firefox_capabilities)
    try:
        run_test(driver, config)
    # Important to always close the driver.
    except:
        print(traceback.format_exc())
        driver.quit()
        return 1
    driver.quit()
    return 0
    
    
if __name__ == '__main__':
    sys.exit(main())