package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="train")
public class TrainEntity {
@Id
private int trainno;
private String time;
private String startat;
private String endat;
public int getTrainno() {
	return trainno;
}
public void setTrainno(int trainno) {
	this.trainno = trainno;
}
public String getTime() {
	return time;
}
public void setTime(String time) {
	this.time = time;
}
public String getStartat() {
	return startat;
}
public void setStartat(String startat) {
	this.startat = startat;
}
public String getEndat() {
	return endat;
}
public void setEndat(String endat) {
	this.endat = endat;
}
public TrainEntity(int trainno, String time, String startat, String endat) {
	super();
	this.trainno = trainno;
	this.time = time;
	this.startat = startat;
	this.endat = endat;
}
public TrainEntity() {
	super();
	// TODO Auto-generated constructor stub
}


}
