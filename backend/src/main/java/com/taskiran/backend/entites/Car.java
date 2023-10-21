package com.taskiran.backend.entites;

import jakarta.persistence.*;

@Entity
@Table(name="cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "car_name")
    private String carName;
    @Column(name = "brand")
    private String brand;
    @Column(name = "modal")
    private String modal;
    @Column(name = "year")
    private int year;
    @Column(name = "plaka")
    private String plaka;

    public Car(){

    }

    public Car(String carName, String brand, String modal, int year, String plaka) {
        this.carName = carName;
        this.brand = brand;
        this.modal = modal;
        this.year = year;
        this.plaka = plaka;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModal() {
        return modal;
    }

    public void setModal(String modal) {
        this.modal = modal;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getPlaka() {
        return plaka;
    }

    public void setPlaka(String plaka) {
        this.plaka = plaka;
    }
}
