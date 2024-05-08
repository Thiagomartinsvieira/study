package br.com.cod3r.mf.model;

@FunctionalInterface
public interface FieldObserver {
    public void eventOccurred(Field field, FieldEvent event);
}
