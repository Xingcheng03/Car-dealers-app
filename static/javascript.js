function main_driver() {
    class Car {
        constructor(brand, Colors, description, basicPrice) {
            this.brand = brand;
            this.Colors = Colors;
            this.description = description;
            this.basicPrice = basicPrice;
        }
    }

    let ferrari = new Car("ferrari", ["red", "white", "yellow"],
        "The Ferrari F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse’s classic two-seater berlinetta. It is a car with unique characteristics and, as its name implies, is an homage to the most powerful V8 in Ferrari history.", 306450);
    let lamborghini = new Car("lamborghini", ["blue", "green", "yellow"], 
        "The Sián FKP 37 is the first super sports car powered by a V12 engine and hybrid technology based on supercapacitors. Its powerful V12 engine, coupled with electric boost, creates an unrivaled gem of engineering and technology. Sián—lightning in Bolognese—is a name that captures the car’s true character, foremost its speed, which exceeds 220 mph (350 km/h).", 3700000);
    let mustang = new Car("mustang", ["black", "silver", "white"], 
        "Adrenaline chasers: This is your wake-up call. The 2024 Mustang® lineup has the power, tech and style to keep ahead of the pack — just like you.", 60000);

    ferrariColors = ferrari.Colors;
    lamboColors = lamborghini.Colors;
    mustangColors = mustang.Colors;
    
    let descriptions = {
        "ferrari": ferrari.description,
        "lamborghini": lamborghini.description,
        "mustang": mustang.description
    }

    var cars = document.getElementById("cars");
    var colors = document.getElementById("colors");
    var noPlan = document.getElementById("no");
    var yesPlan = document.getElementById("yes");
    var image = document.getElementById("image");
    var description = document.getElementById("description");
    var selectedBrand = cars.value;
    var selectedColor = colors.value;

    updateText(yesPlan, noPlan);

    cars.addEventListener("change", function () {
        selectedBrand = cars.value;
        colors.innerHTML = "";
        let colorOptions = ferrariColors;
        if (selectedBrand == "ferrari") {
            colorOptions = ferrariColors;
            image.src = "./static/images/F_3.jpg";
        } else if (selectedBrand == "lamborghini") {
            colorOptions = lamboColors;
            image.src = "./static/images/L_2.jpg";
        } else if (selectedBrand == "mustang") {
            colorOptions = mustangColors;
            image.src = "./static/images/M_2.jpg";
        }

        console.dir(colorOptions);
        console.log(typeof colorOptions);
        for (i = 0; i < colorOptions.length; i++) {
            let option = document.createElement("option");
            option.text = colorOptions[i];
            colors.add(option);
        }
        updateText(yesPlan, noPlan);
    });

    colors.addEventListener("change", function () {
        selectedColor = colors.value;

        if (selectedBrand == "ferrari") {
            if (selectedColor == "red") image.src = "./static/images/F_3.jpg";
            if (selectedColor == "white") image.src = "./static/images/F_1.jpg";
            if (selectedColor == "yellow") image.src = "./static/images/F_2.jpg";
        }
        if (selectedBrand == "lamborghini") {
            if (selectedColor == "yellow") image.src = "./static/images/L_1.jpg";
            if (selectedColor == "green") image.src = "./static/images/L_3.jpg";
            if (selectedColor == "blue") image.src = "./static/images/L_2.jpg";
        }
        if (selectedBrand == "mustang") {
            if (selectedColor == "black") image.src = "./static/images/M_2.jpg";
            if (selectedColor == "silver") image.src = "./static/images/M_1.jpg";
            if (selectedColor == "white") image.src = "./static/images/M_3.jpg";
        }
        updateText(yesPlan, noPlan);
    });

    function updateText(yesPlan, noPlan) {
        if (selectedBrand == "ferrari") {
            description.textContent = "Car: " + selectedBrand + "\r\n" + "Description: " + descriptions[selectedBrand];
            description.textContent += "\r\n" + "Color: " + selectedColor;
            if (yesPlan.checked) description.textContent += "\r\n" + "Basic Price: " +
            ferrari.basicPrice + "\r\n" + "Total Price: " + ferrari.basicPrice * 1.3;
            if (noPlan.checked) description.textContent += "\r\n" + "Basic Price: " + 
            ferrari.basicPrice + "\r\n" + "Total Price: " + ferrari.basicPrice;
        }
        if (selectedBrand == "lamborghini") {
            description.textContent = "Car: " + selectedBrand + "\r\n" + "Description: " + descriptions[selectedBrand];
            description.textContent += "\r\n" + "Color: " + selectedColor;
            if (yesPlan.checked) description.textContent += "\r\n" + "Basic Price: " + 
            lamborghini.basicPrice + "\r\n" + "Total Price: " + lamborghini.basicPrice * 1.3;
            if (noPlan.checked) description.textContent += "\r\n" + "Basic Price: " + 
            lamborghini.basicPrice + "\r\n" + "Total Price: " + lamborghini.basicPrice;
        }
        if (selectedBrand == "mustang") {
            description.textContent = "Car: " + selectedBrand + "\r\n" + "Description: " + descriptions[selectedBrand];
            description.textContent += "\r\n" + "Color: " + selectedColor;
            if (yesPlan.checked) description.textContent += "\r\n" + "Basic Price: " + 
            mustang.basicPrice + "\r\n" + "Total Price: " + mustang.basicPrice * 1.3;
            if (noPlan.checked) description.textContent += "\r\n" + "Basic Price: " + 
            mustang.basicPrice + "\r\n" + "Total Price: " + mustang.basicPrice;
        }
    }

    noPlan.addEventListener("click", function () {
        updateText(yesPlan, noPlan);
    });
    yesPlan.addEventListener("click", function () {
        updateText(yesPlan, noPlan);
    })
    console.log(yesPlan.checked);
    console.log(noPlan.checked);
}