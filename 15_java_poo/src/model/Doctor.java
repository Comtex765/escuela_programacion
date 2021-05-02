<<<<<<< HEAD
package model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class Doctor extends User {
    //Atributo
    private String speciality;

    public Doctor(String name, String email){
        super(name,email);
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }
    
    ArrayList<AvailableAppointment> availableAppointments = new ArrayList<>();
    public void addAvailableAppointment(String date, String time){

        availableAppointments.add(new Doctor.AvailableAppointment(date,time));
    }

    public ArrayList<AvailableAppointment> getAvailableAppointments(){
        return availableAppointments;
    }

    @Override
    public String toString() {
        return super.toString() +
                "\nSpeciality: " + speciality +
                "\nAvailable: " + availableAppointments.toString();
    }

    @Override
    public void showDatUser() {
        System.out.println("Hospital: Cruz Roja");
        System.out.println("Departamento: Cancerología");
    }

    public static class AvailableAppointment{
        private int id;
        private Date date;
        private String time;

        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yy");

        public AvailableAppointment(String date, String time) {
            try {
                this.date = format.parse(date);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            this.time = time;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public Date getDate() {
            return date;
        }

        public String getDate(String DATE){
            return format.format(date);
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public String getTime() {
            return time;
        }

        public void setTime(String time) {
            this.time = time;
        }

        @Override
        public String toString() {
            return "Available Appointments \nDate: " + date +
                    "\nTime: " + time ;
        }
    }
}

=======
package model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class Doctor extends User {
    //Atributo
    private String speciality;

    public Doctor(String name, String email){
        super(name,email);
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }
    
    ArrayList<AvailableAppointment> availableAppointments = new ArrayList<>();
    public void addAvailableAppointment(String date, String time){

        availableAppointments.add(new Doctor.AvailableAppointment(date,time));
    }

    public ArrayList<AvailableAppointment> getAvailableAppointments(){
        return availableAppointments;
    }

    @Override
    public String toString() {
        return super.toString() +
                "\nSpeciality: " + speciality +
                "\nAvailable: " + availableAppointments.toString();
    }

    @Override
    public void showDatUser() {
        System.out.println("Hospital: Cruz Roja");
        System.out.println("Departamento: Cancerología");
    }

    public static class AvailableAppointment{
        private int id;
        private Date date;
        private String time;

        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yy");

        public AvailableAppointment(String date, String time) {
            try {
                this.date = format.parse(date);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            this.time = time;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public Date getDate() {
            return date;
        }

        public String getDate(String DATE){
            return format.format(date);
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public String getTime() {
            return time;
        }

        public void setTime(String time) {
            this.time = time;
        }

        @Override
        public String toString() {
            return "Available Appointments \nDate: " + date +
                    "\nTime: " + time ;
        }
    }
}

>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
