package org.hsbc.model;

public class Course {
    private int id;
    private String name,trainer;
    private int duration;

    public Course() {
    }

    public Course(int id, String name, String trainer, int duration) {
        this.id = id;
        this.name = name;
        this.trainer = trainer;
        this.duration = duration;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTrainer() {
        return trainer;
    }

    public void setTrainer(String trainer) {
        this.trainer = trainer;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", trainer='" + trainer + '\'' +
                ", duration=" + duration +
                '}';
    }
}
