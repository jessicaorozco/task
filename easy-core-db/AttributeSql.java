package easy-core-db;

public class AttributeSql {
    private String name;
    private Object value;
    private int type;
 
    public AttributeSql(String name, String value) {
       this.name = name;
       this.value = value;
       this.type = 12;
    }
 
    public AttributeSql(String name, Object value, int type) {
       this.name = name;
       this.value = value;
       this.type = type;
    }
 
    public String getName() {
       return this.name;
    }
 
    public void setName(String name) {
       this.name = name;
    }
 
    public Object getValue() {
       return this.value;
    }
 
    public void setValue(Object value) {
       this.value = value;
    }
 
    public int getType() {
       return this.type;
    }
 
    public void setType(int type) {
       this.type = type;
    }
 
}
