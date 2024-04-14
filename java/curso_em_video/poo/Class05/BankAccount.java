package Class05;

// Attributes

public class BankAccount {
    public int numAccount;

    protected String type;

    private String owner;

    private float balance;

    private boolean status;

    // Custom method
    public void actualState(){
        System.out.println("-----------------------------");
        System.out.println("Account: " + this.getNumAccount());
        System.out.println("Type: " + this.getType());
        System.out.println("Owner: " + this.getOwner());
        System.out.println("Balance: " + this.getBalance());
        System.out.println("Status: " + this.getStatus());
    }

    public void openAccount(String t){
        this.setType(t);
        this.setStatus(true);
        if  (t == "CC"){
            this.setBalance(50);
        } else if (t == "CP") {
            this.setBalance(150);
        }
        System.out.println("Account opened successfully");

    }
    public void closeAccount(){
        if(this.getBalance() > 0){
            System.out.println("Account cannot be closed as there is still money");
        } else  if (this.getBalance() < 0){
            System.out.println("Account cannot to close as it has a negative balance");
        } else {
            this.setStatus(false);
            System.out.println("Account is closed succesfully");
        }
    }
    public void withdraw(float v){
        if (this.getStatus()){
//            this.balance = this.balance + v;
            this.setBalance(this.getBalance() + v);
            System.out.println("Succesfully deposited into your account " + this.getOwner());

        } else {
            System.out.println("Impossible to deposit into a closed account");
        }
    }

    public void toWithdraw(float v){
        if(this.getStatus()){
            if(this.getBalance() >= v) {
                this.setBalance(this.getBalance() - v);
                System.out.println("Withdrawal made to the account " + this.getOwner());
            } else {
                System.out.println("Insufficient founds");
            }
        } else {
            System.out.println("Impossible to withdraw from a closed account");
        }
    }

    public void payMonthly(){
        int v = 0;
        if(this.getType() == "CC"){
            v = 12;
        } else if (this.getType() == "CP") {
            v = 20;
        }
        if(this.getStatus()){
            this.setBalance(this.getBalance() - v);
            System.out.println("Successfully paid monthly fee " + this.getOwner());
        } else {
            System.out.println("Impossible pay a closed bill!");
        }
    }
    // Especial method

    public BankAccount(){
        this.balance = 0;
        this.status = false;
    }

    public int getNumAccount() {
        return numAccount;
    }

    public void setNumAccount(int numAccount) {
        this.numAccount = numAccount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public float getBalance() {
        return balance;
    }

    public void setBalance(float balance) {
        this.balance = balance;
    }

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
