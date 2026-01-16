const form = document.getElementById("appointmentForm");
const list = document.getElementById("appointmentList");

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

function displayAppointments() {
    list.innerHTML = "";

    appointments.forEach((app, index) => {
        const li = document.createElement("li");
        li.className = "service-item";

        li.innerHTML = `
            <div class="service-card">
                <h3>${app.name}</h3>
                <p><strong>Department:</strong> ${app.department}</p>
                <p><strong>Doctor:</strong> ${app.doctor}</p>
                <p><strong>Date:</strong> ${app.date}</p>
                <p><strong>Time:</strong> ${app.time}</p>
                <button onclick="deleteAppointment(${index})">Cancel</button>
            </div>
        `;
        list.appendChild(li);
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const appointment = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        doctor: document.getElementById("doctor").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value
    };

    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    form.reset();
    displayAppointments();
});

function deleteAppointment(index) {
    appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    displayAppointments();
}

displayAppointments();
