package br.com.cod3r.calc.model;

@FunctionalInterface
public interface MemoryObserver {

    public void changeValue(String newValue);
}
