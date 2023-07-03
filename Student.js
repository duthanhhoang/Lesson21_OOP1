class Student{
    constructor(_name, _math, _physic, chemistry){ //hàm khởi tạo
        this.name = _name;
        this.math = _math;
        this.physic = _physic;
        this.chemistry = chemistry;
    }

    getAvg(){
        return (this.math + this.physic + this.chemistry)
    }

    showResult(){
        if(this.getAvg() > 27){
            console.log("Đỗ rồi : " + this.getAvg());
        }else{
            console.log("Chúc bạn may mắn lần sau : "+ this.getAvg());
        }
    }
}