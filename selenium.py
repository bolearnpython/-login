from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
driver = webdriver.Chrome(executable_path='E:\\rj\\Chrome\\chromedriver.exe')
def zhihu():
	driver.get('https://www.zhihu.com/#signin')
	driver.find_element_by_name("account").send_keys(u"17096701774")
	driver.find_element_by_name("password").send_keys("199323")
	driver.find_element_by_name("captcha").send_keys("mdb7")
	driver.find_element_by_class_name("submit").click()
def qq():
	driver.get('http://qzone.qq.com/')
	driver.switch_to_frame("login_frame")
	driver.find_element_by_id("switcher_plogin").click()
	driver.find_element_by_id("u").send_keys("1726448967")
	driver.find_element_by_id("p").send_keys("yhnujm") 
	driver.find_element_by_id("login_button").click()    
def baidu():
	driver.get("http://www.baidu.com")
	driver.find_element_by_link_text("登录").click()
	time.sleep(4)
	driver.find_element_by_id("TANGRAM__PSP_8__userName").send_keys("喂小心哪") 
	driver.find_element_by_id('TANGRAM__PSP_8__password').send_keys("xia#3l")
	driver.find_element_by_id('TANGRAM__PSP_8__verifyCode').send_keys("商城") 
	driver.find_element_by_id('TANGRAM__PSP_8__submit').click() 
def xinlan():
	driver.get("https://login.sina.com.cn/signup/signin.php")
	time.sleep(2)
	driver.find_element_by_id("username").send_keys("17096701774") 
	driver.find_element_by_id("password").send_keys("199323")
	driver.find_element_by_xpath('//ul/li[7]/div[1]/input').click()
	driver.find_element_by_name("door").send_keys("yvg4k")
	driver.find_element_by_xpath('//ul/li[7]/div[1]/input').click()
def mweibo():
	driver.get("http://m.weibo.cn")
	driver.find_element_by_link_text('登录').click() 
	time.sleep(3)
	driver.find_element_by_id("loginName").send_keys("17096701774") 
	driver.find_element_by_id("loginPassword").send_keys("199323") 
	driver.find_element_by_id("loginAction").click()
def taobao():
	driver.get('https://login.m.taobao.com/login.htm')
	driver.find_element_by_id("username").send_keys("17096701774")
	driver.find_element_by_id("password").send_keys("199323bob")
	driver.find_element_by_id("submit-btn").click()