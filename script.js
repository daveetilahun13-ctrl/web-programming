const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const appointmentForm = document.getElementById('appointmentForm');
const doctorList = document.getElementById('doctorList');
const timeSlots = document.getElementById('timeSlots');
const selectedDateText = document.getElementById('selectedDateText');
const confirmationModal = document.getElementById('confirmationModal');
const closeModal = document.getElementById('closeModal');
const resetBtn = document.getElementById('resetBtn');
const confirmBtn = document.getElementById('confirmBtn');
const submitBtn = document.getElementById('submitBtn');
const printBtn = document.getElementById('printBtn');
const newAppointmentBtn = document.getElementById('newAppointmentBtn');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const dob = document.getElementById('dob');
const gender = document.getElementById('gender');
const department = document.getElementById('department');
const appointmentDate = document.getElementById('appointmentDate');
const symptoms = document.getElementById('symptoms');

const summaryName = document.getElementById('summaryName');
const summaryGender = document.getElementById('summaryGender');
const summaryDepartment = document.getElementById('summaryDepartment');
const summaryDate = document.getElementById('summaryDate');
const summaryDoctor = document.getElementById('summaryDoctor');
const summaryTime = document.getElementById('summaryTime');
const summaryFee = document.getElementById('summaryFee');

const confirmId = document.getElementById('confirmId');
const confirmName = document.getElementById('confirmName');
const confirmDoctor = document.getElementById('confirmDoctor');
const confirmDateTime = document.getElementById('confirmDateTime');
const confirmDepartment = document.getElementById('confirmDepartment');
const confirmFee = document.getElementById('confirmFee');

const doctors = [
    {
        id: 1,
        name: "Dr. Selamawit Bekele",
        specialty: "Cardiologist",
        experience: "18 years",
        fee: 1500,
        department: "cardiology",
        qualification: "MD, Fellowship in Cardiology",
        languages: ["Amharic", "English", "Tigrinya"],
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        availableDays: ["Monday", "Wednesday", "Friday"]
    },
    {
        id: 2,
        name: "Dr. Solomon Girma",
        specialty: "Internal Medicine Specialist",
        experience: "15 years",
        fee: 1200,
        department: "internal_medicine",
        qualification: "MD, Internal Medicine",
        languages: ["Amharic", "English", "Oromo"],
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        availableDays: ["Tuesday", "Thursday", "Saturday"]
    },
    {
        id: 3,
        name: "Dr. Bethlehem Tadesse",
        specialty: "Pediatrician",
        experience: "12 years",
        fee: 1000,
        department: "pediatrics",
        qualification: "MD, Pediatrics",
        languages: ["Amharic", "English"],
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    {
        id: 4,
        name: "Dr. Yohannes Kebede",
        specialty: "Orthopedic Surgeon",
        experience: "20 years",
        fee: 2000,
        department: "orthopedics",
        qualification: "MD, Orthopedic Surgery",
        languages: ["Amharic", "English"],
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        availableDays: ["Monday", "Wednesday", "Friday"]
    },
    {
        id: 5,
        name: "Dr. Makeda Assefa",
        specialty: "Obstetrician & Gynecologist",
        experience: "14 years",
        fee: 1300,
        department: "obstetrics",
        qualification: "MD, Obstetrics & Gynecology",
        languages: ["Amharic", "English"],
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        availableDays: ["Tuesday", "Thursday", "Saturday"]
    },
    {
        id: 6,
        name: "Dr. Daniel Haile",
        specialty: "General Surgeon",
        experience: "16 years",
        fee: 1800,
        department: "surgery",
        qualification: "MD, General Surgery",
        languages: ["Amharic", "English", "Tigrinya"],
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        availableDays: ["Monday", "Wednesday", "Friday"]
    },
    {
        id: 7,
        name: "Dr. Ruth Mekonnen",
        specialty: "Ophthalmologist",
        experience: "10 years",
        fee: 1100,
        department: "ophthalmology",
        qualification: "MD, Ophthalmology",
        languages: ["Amharic", "English"],
        image: "https://randomuser.me/api/portraits/women/26.jpg",
        availableDays: ["Tuesday", "Thursday", "Saturday"]
    },
    {
        id: 8,
        name: "Dr. Tesfaye Abebe",
        specialty: "Dentist",
        experience: "8 years",
        fee: 900,
        department: "dentistry",
        qualification: "DDS, Dental Surgery",
        languages: ["Amharic", "English"],
        image: "https://randomuser.me/api/portraits/men/81.jpg",
        availableDays: ["Monday", "Wednesday", "Friday", "Saturday"]
    },
    {
        id: 9,
        name: "Dr. Hiwot Mulatu",
        specialty: "Dermatologist",
        experience: "11 years",
        fee: 1400,
        department: "dermatology",
        qualification: "MD, Dermatology",
        languages: ["Amharic", "English", "Oromo"],
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        availableDays: ["Tuesday", "Thursday"]
    },
    {
        id: 10,
        name: "Dr. Michael Tsegaye",
        specialty: "ENT Specialist",
        experience: "9 years",
        fee: 1150,
        department: "ent",
        qualification: "MD, ENT",
        languages: ["Amharic", "English"],
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        availableDays: ["Monday", "Wednesday", "Friday"]
    }
];

const availableTimeSlots = [
    "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM"
];

const ethiopianPhoneRegex = /^(09\d{8}|9\d{8}|011\d{6,7})$/;

const ethiopianHolidays = [
    "2024-01-07",
    "2024-01-19",
    "2024-03-02",
    "2024-04-28",
    "2024-05-01",
    "2024-05-05",
    "2024-05-28",
    "2024-09-11",
    "2024-09-27"
];

const bookedAppointments = [
    { date: getFormattedDate(new Date()), time: "10:00 AM", doctorId: 1 },
    { date: getFormattedDate(new Date()), time: "02:30 PM", doctorId: 3 },
    { date: getFormattedDate(new Date(Date.now() + 86400000)), time: "11:00 AM", doctorId: 2 }
];

let selectedDoctor = null;
let selectedTimeSlot = null;
let selectedDepartment = "";
let selectedAppointmentDate = "";
let selectedGender = "";

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    appointmentDate.min = today;
    
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 6);
    appointmentDate.max = maxDate.toISOString().split('T')[0];
    
    dob.max = new Date().toISOString().split('T')[0];
    
    renderDoctors();
    updateTimeSlots();
    setupEventListeners();
    setupFormListeners();
    displayEthiopianDate();
    setupPhoneFormatting();
});

function setupEventListeners() {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    appointmentForm.addEventListener('submit', handleFormSubmit);
    department.addEventListener('change', handleDepartmentChange);
    gender.addEventListener('change', handleGenderChange);
    appointmentDate.addEventListener('change', handleDateChange);
    closeModal.addEventListener('click', closeConfirmationModal);
    printBtn.addEventListener('click', printAppointmentDetails);
    newAppointmentBtn.addEventListener('click', startNewAppointment);
    resetBtn.addEventListener('click', resetForm);
    confirmBtn.addEventListener('click', confirmAppointment);
    
    confirmationModal.addEventListener('click', function(e) {
        if (e.target === confirmationModal) {
            closeConfirmationModal();
        }
    });
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    if (validateForm()) {
        updateSummary();
        document.getElementById('doctors').scrollIntoView({ behavior: 'smooth' });
        updateConfirmButton();
        showNotification('Form submitted successfully! Please select a doctor.', 'success');
    }
}

function validateForm() {
    let isValid = true;
    clearErrors();
    
    if (!firstName.value.trim()) {
        showError('firstNameError', 'First name is required');
        isValid = false;
    } else if (firstName.value.trim().length < 2) {
        showError('firstNameError', 'First name must be at least 2 characters');
        isValid = false;
    }
    
    if (!lastName.value.trim()) {
        showError('lastNameError', 'Last name is required');
        isValid = false;
    } else if (lastName.value.trim().length < 2) {
        showError('lastNameError', 'Last name must be at least 2 characters');
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!phone.value.trim()) {
        showError('phoneError', 'Phone number is required');
        isValid = false;
    } else {
        const cleanPhone = phone.value.replace(/[\s\-\(\)]/g, '');
        
        if (!ethiopianPhoneRegex.test(cleanPhone)) {
            showError('phoneError', 'Please enter a valid Ethiopian phone number (09XXXXXXXX or 011XXXXXX)');
            isValid = false;
        } else if (cleanPhone.length !== 9 && cleanPhone.length !== 10) {
            showError('phoneError', 'Phone number must be 9 or 10 digits');
            isValid = false;
        }
    }
    
    if (!dob.value) {
        showError('dobError', 'Date of birth is required');
        isValid = false;
    } else {
        const birthDate = new Date(dob.value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        if (age < 1) {
            showError('dobError', 'Patient must be at least 1 year old');
            isValid = false;
        }
        
        if (age > 120) {
            showError('dobError', 'Please enter a valid date of birth');
            isValid = false;
        }
    }
    
    if (!gender.value) {
        showError('genderError', 'Please select gender');
        isValid = false;
    }
    
    if (!department.value) {
        showError('departmentError', 'Please select a department');
        isValid = false;
    }
    
    if (!appointmentDate.value) {
        showError('dateError', 'Please select an appointment date');
        isValid = false;
    } else {
        if (ethiopianHolidays.includes(appointmentDate.value)) {
            showError('dateError', 'Selected date is an Ethiopian holiday. Hospital is closed.');
            isValid = false;
        }
        
        const selectedDate = new Date(appointmentDate.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showError('dateError', 'Appointment date cannot be in the past');
            isValid = false;
        }
        
        if (selectedDate.getDay() === 0) {
            showError('dateError', 'Sunday appointments have limited availability (9:00 AM - 4:00 PM)');
        }
    }
    
    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function handleDepartmentChange() {
    selectedDepartment = department.value;
    renderDoctors();
    updateSummary();
}

function handleGenderChange() {
    selectedGender = gender.value;
    updateSummary();
}

function handleDateChange() {
    selectedAppointmentDate = appointmentDate.value;
    
    if (!selectedAppointmentDate) {
        selectedDateText.textContent = 'your selected date';
        updateTimeSlots();
        updateSummary();
        return;
    }
    
    const dateObj = new Date(selectedAppointmentDate);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    
    const ethiopianDate = getEthiopianDate(dateObj);
    selectedDateText.innerHTML = `${formattedDate} <br><small>(${ethiopianDate} in Ethiopian Calendar)</small>`;
    
    updateTimeSlots();
    updateSummary();
}

function getEthiopianDate(gregorianDate) {
    const ethiopianMonths = [
        "Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yekatit", 
        "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehase"
    ];
    
    const day = (gregorianDate.getDate() % 30) || 30;
    const monthIndex = gregorianDate.getMonth() % 12;
    const year = gregorianDate.getFullYear() - 8;
    
    return `${day} ${ethiopianMonths[monthIndex]} ${year}`;
}

function displayEthiopianDate() {
    const today = new Date();
    const ethiopianDate = getEthiopianDate(today);
    console.log(`Today in Ethiopian Calendar: ${ethiopianDate}`);
}

function updateTimeSlots() {
    timeSlots.innerHTML = '';
    
    if (!selectedAppointmentDate) {
        const noDateMessage = document.createElement('div');
        noDateMessage.className = 'no-date-message';
        noDateMessage.textContent = 'Please select a date first';
        timeSlots.appendChild(noDateMessage);
        return;
    }
    
    const selectedDateFormatted = getFormattedDate(new Date(selectedAppointmentDate));
    const selectedDateObj = new Date(selectedAppointmentDate);
    const isSunday = selectedDateObj.getDay() === 0;
    const dayName = selectedDateObj.toLocaleDateString('en-US', { weekday: 'long' });
    
    const sundaySlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"];
    const slotsToShow = isSunday ? sundaySlots : availableTimeSlots;
    
    let doctorAvailableDays = [];
    if (selectedDoctor) {
        doctorAvailableDays = selectedDoctor.availableDays || [];
    }
    
    slotsToShow.forEach(time => {
        const timeSlot = document.createElement('div');
        timeSlot.className = 'time-slot';
        timeSlot.textContent = time;
        
        const isBooked = bookedAppointments.some(appointment => 
            appointment.date === selectedDateFormatted && 
            appointment.time === time && 
            (!selectedDoctor || appointment.doctorId === selectedDoctor.id)
        );
        
        const isDoctorAvailable = !selectedDoctor || doctorAvailableDays.includes(dayName);
        
        if (isBooked) {
            timeSlot.classList.add('booked');
            timeSlot.title = 'This slot is already booked';
        } else if (!isDoctorAvailable && selectedDoctor) {
            timeSlot.classList.add('booked');
            timeSlot.title = `Dr. ${selectedDoctor.name.split(' ')[1]} is not available on ${dayName}s`;
        } else {
            timeSlot.addEventListener('click', () => selectTimeSlot(timeSlot, time));
            timeSlot.title = 'Click to select this time slot';
        }
        
        timeSlots.appendChild(timeSlot);
    });
}

function selectTimeSlot(timeSlotElement, time) {
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    
    timeSlotElement.classList.add('selected');
    selectedTimeSlot = time;
    
    updateSummary();
    updateConfirmButton();
    showNotification(`Time slot ${time} selected`, 'info');
}

function renderDoctors() {
    doctorList.innerHTML = '';
    
    let filteredDoctors = selectedDepartment ? 
        doctors.filter(doctor => doctor.department === selectedDepartment) : 
        doctors;
    
    filteredDoctors = filteredDoctors.sort((a, b) => {
        const expA = parseInt(a.experience);
        const expB = parseInt(b.experience);
        return expB - expA;
    });
    
    if (filteredDoctors.length === 0) {
        const noDoctorsMessage = document.createElement('div');
        noDoctorsMessage.className = 'no-doctors-message';
        noDoctorsMessage.innerHTML = `
            <p><i class="fas fa-user-md" style="font-size: 3rem; color: var(--gray); margin-bottom: 15px;"></i></p>
            <p>No doctors available for the selected department.</p>
            <p>Please select a different department or contact the hospital.</p>
            <button class="btn btn-primary" style="margin-top: 15px;" onclick="resetDepartment()">Select Different Department</button>
        `;
        doctorList.appendChild(noDoctorsMessage);
        return;
    }
    
    filteredDoctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';
        if (selectedDoctor && selectedDoctor.id === doctor.id) {
            doctorCard.classList.add('selected');
        }
        
        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}" class="doctor-img">
            <h4 class="doctor-name">${doctor.name}</h4>
            <p class="doctor-specialty">${doctor.specialty}</p>
            <p class="doctor-qualification">${doctor.qualification}</p>
            <p class="doctor-experience">Experience: ${doctor.experience}</p>
            <p class="doctor-languages">Languages: ${doctor.languages.join(', ')}</p>
            <p class="doctor-fee">Fee: ${formatCurrency(doctor.fee)} Birr</p>
            <p class="doctor-availability"><small>Available: ${doctor.availableDays.join(', ')}</small></p>
            <button class="btn btn-primary select-doctor-btn" data-id="${doctor.id}">
                ${selectedDoctor && selectedDoctor.id === doctor.id ? 'Selected' : 'Select Doctor'}
            </button>
        `;
        
        doctorList.appendChild(doctorCard);
        
        const selectBtn = doctorCard.querySelector('.select-doctor-btn');
        selectBtn.addEventListener('click', () => selectDoctor(doctor));
    });
}

function selectDoctor(doctor) {
    selectedDoctor = doctor;
    
    document.querySelectorAll('.doctor-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selectedCard = document.querySelector(`.select-doctor-btn[data-id="${doctor.id}"]`).closest('.doctor-card');
    selectedCard.classList.add('selected');
    
    document.querySelectorAll('.select-doctor-btn').forEach(btn => {
        btn.textContent = 'Select Doctor';
    });
    document.querySelector(`.select-doctor-btn[data-id="${doctor.id}"]`).textContent = 'Selected';
    
    updateSummary();
    updateTimeSlots();
    updateConfirmButton();
    showNotification(`Dr. ${doctor.name.split(' ')[1]} selected`, 'info');
}

function updateSummary() {
    const fullName = `${firstName.value || ''} ${lastName.value || ''}`.trim();
    summaryName.textContent = fullName || 'Not specified';
    
    const genderText = gender.options[gender.selectedIndex]?.text || 'Not selected';
    summaryGender.textContent = genderText;
    
    const departmentText = department.options[department.selectedIndex]?.text || 'Not selected';
    summaryDepartment.textContent = departmentText;
    
    summaryDate.textContent = selectedAppointmentDate ? formatDateDisplay(selectedAppointmentDate) : 'Not selected';
    
    summaryDoctor.textContent = selectedDoctor ? selectedDoctor.name : 'Not selected';
    
    summaryTime.textContent = selectedTimeSlot || 'Not selected';
    
    const fee = selectedDoctor ? selectedDoctor.fee : 0;
    summaryFee.textContent = `${formatCurrency(fee)} Birr`;
}

function updateConfirmButton() {
    const isFormValid = validateForm();
    const hasDoctorAndTime = selectedDoctor && selectedTimeSlot;
    
    confirmBtn.disabled = !(isFormValid && hasDoctorAndTime);
    
    if (!confirmBtn.disabled) {
        confirmBtn.innerHTML = `<i class="fas fa-calendar-check"></i> Confirm Appointment - ${formatCurrency(selectedDoctor.fee)} Birr`;
    } else {
        confirmBtn.innerHTML = `<i class="fas fa-calendar-check"></i> Confirm Appointment`;
    }
}

function setupFormListeners() {
    const formFields = [firstName, lastName, email, phone, dob, gender, department, appointmentDate];
    
    formFields.forEach(field => {
        field.addEventListener('input', () => {
            validateField(field);
            updateSummary();
            updateConfirmButton();
        });
        
        field.addEventListener('change', () => {
            validateField(field);
            updateSummary();
            updateConfirmButton();
        });
    });
}

function validateField(field) {
    const fieldId = field.id;
    const errorElementId = `${fieldId}Error`;
    
    showError(errorElementId, '');
    
    if (field.required && !field.value.trim()) {
        return false;
    }
    
    if (fieldId === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            showError(errorElementId, 'Please enter a valid email address');
            return false;
        }
    }
    
    if (fieldId === 'phone' && field.value.trim()) {
        const cleanPhone = field.value.replace(/[\s\-\(\)]/g, '');
        
        if (!ethiopianPhoneRegex.test(cleanPhone)) {
            showError(errorElementId, 'Valid formats: 09XXXXXXXX or 011XXXXXX');
            return false;
        }
    }
    
    if (fieldId === 'appointmentDate' && field.value) {
        if (ethiopianHolidays.includes(field.value)) {
            showError(errorElementId, 'Ethiopian holiday - Hospital closed');
            return false;
        }
    }
    
    return true;
}

function confirmAppointment() {
    if (!selectedDoctor || !selectedTimeSlot) {
        showNotification('Please select a doctor and time slot before confirming.', 'warning');
        return;
    }
    
    const year = new Date().getFullYear();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const appointmentId = `AD-${year}-${randomNum}`;
    
    confirmId.textContent = appointmentId;
    confirmName.textContent = `${firstName.value} ${lastName.value}`;
    confirmDoctor.textContent = selectedDoctor.name;
    confirmDateTime.textContent = `${formatDateDisplay(selectedAppointmentDate)} at ${selectedTimeSlot}`;
    confirmDepartment.textContent = department.options[department.selectedIndex].text;
    confirmFee.textContent = `${formatCurrency(selectedDoctor.fee)} Birr`;
    
    confirmationModal.style.display = 'flex';
    
    const selectedDateFormatted = getFormattedDate(new Date(selectedAppointmentDate));
    bookedAppointments.push({
        id: appointmentId,
        date: selectedDateFormatted,
        time: selectedTimeSlot,
        doctorId: selectedDoctor.id,
        patientName: `${firstName.value} ${lastName.value}`,
        phone: phone.value
    });
    
    console.log('Appointment booked:', {
        id: appointmentId,
        patient: `${firstName.value} ${lastName.value}`,
        doctor: selectedDoctor.name,
        date: selectedDateFormatted,
        time: selectedTimeSlot,
        fee: `${selectedDoctor.fee} Birr`,
        phone: phone.value
    });
    
    showNotification('Appointment confirmed successfully!', 'success');
}

function closeConfirmationModal() {
    confirmationModal.style.display = 'none';
    setTimeout(resetForm, 300);
}

function printAppointmentDetails() {
    const printContent = `
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #2a7de1; margin-bottom: 5px;">Addis Care Hospital</h1>
            <p style="color: #666; margin-bottom: 20px;">Bole Road, Addis Ababa, Ethiopia</p>
            <h2 style="color: #333; border-bottom: 2px solid #2a7de1; padding-bottom: 10px;">Appointment Confirmation</h2>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Appointment ID:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${confirmId.textContent}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Patient Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${confirmName.textContent}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Doctor:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${confirmDoctor.textContent}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Date & Time:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${confirmDateTime.textContent}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Department:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${confirmDepartment.textContent}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Consultation Fee:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${confirmFee.textContent}</td>
            </tr>
        </table>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <h3 style="color: #333; margin-bottom: 15px;">Important Instructions:</h3>
            <ul style="margin-left: 20px;">
                <li>Please arrive 15 minutes before your scheduled appointment time</li>
                <li>Bring your ID card and insurance card (if applicable)</li>
                <li>Emergency contact: +251 11 123 4567</li>
                <li>Location: Bole Road, Addis Ababa, Ethiopia</li>
                <li>Parking is available at the hospital premises</li>
            </ul>
        </div>
        
        <div style="text-align: center; color: #666; font-size: 14px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
            <p>Thank you for choosing Addis Care Hospital!</p>
            <p>We wish you good health and speedy recovery.</p>
            <p>Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
        </div>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Appointment Confirmation - Addis Care Hospital</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        padding: 40px; 
                        max-width: 800px; 
                        margin: 0 auto; 
                        color: #333;
                    }
                    @media print {
                        body { padding: 20px; }
                    }
                </style>
            </head>
            <body>
                ${printContent}
                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(function() {
                            window.close();
                        }, 500);
                    };
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();
}

function startNewAppointment() {
    closeConfirmationModal();
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
    showNotification('You can now book another appointment', 'info');
}

function resetForm() {
    appointmentForm.reset();
    clearErrors();
    
    selectedDoctor = null;
    selectedTimeSlot = null;
    selectedDepartment = "";
    selectedAppointmentDate = "";
    selectedGender = "";
    
    document.querySelectorAll('.doctor-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    
    document.querySelectorAll('.select-doctor-btn').forEach(btn => {
        btn.textContent = 'Select Doctor';
    });
    
    updateSummary();
    
    selectedDateText.textContent = 'your selected date';
    updateTimeSlots();
    
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = '<i class="fas fa-calendar-check"></i> Confirm Appointment';
    
    const today = new Date().toISOString().split('T')[0];
    appointmentDate.min = today;
    
    showNotification('Form reset. You can start a new booking.', 'info');
}

function getFormattedDate(date) {
    return date.toISOString().split('T')[0];
}

function formatDateDisplay(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function formatCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setupPhoneFormatting() {
    phone.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.startsWith('0')) {
            value = value.substring(1);
        }
        
        if (value.length === 0) {
            e.target.value = '';
        } else if (value.length <= 2) {
            e.target.value = `09${value}`;
        } else if (value.length <= 6) {
            e.target.value = `09${value.substring(0, 2)} ${value.substring(2)}`;
        } else if (value.length <= 9) {
            e.target.value = `09${value.substring(0, 2)} ${value.substring(2, 6)} ${value.substring(6, 9)}`;
        } else {
            e.target.value = `09${value.substring(0, 2)} ${value.substring(2, 6)} ${value.substring(6, 10)}`;
        }
    });
}

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#d4edda' : type === 'warning' ? '#fff3cd' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'warning' ? '#856404' : '#0c5460'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'warning' ? '#ffeaa7' : '#bee5eb'};
        border-radius: var(--border-radius);
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 300px;
        max-width: 400px;
        z-index: 3000;
        box-shadow: var(--box-shadow);
        animation: slideIn 0.3s ease;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: inherit;
            margin-left: 15px;
        }
    `;
    document.head.appendChild(style);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    document.body.appendChild(notification);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            navMenu.classList.remove('active');
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function resetDepartment() {
    department.value = '';
    selectedDepartment = '';
    renderDoctors();
    updateSummary();
    showNotification('Department selection cleared. Please select a department.', 'info');
}

function initEthiopianDateInFooter() {
    const today = new Date();
    const ethiopianDate = getEthiopianDate(today);
    const footer = document.querySelector('footer .container');
    if (footer) {
        const dateElement = document.createElement('div');
        dateElement.style.textAlign = 'center';
        dateElement.style.marginTop = '10px';
        dateElement.style.fontSize = '0.9rem';
        dateElement.style.color = '#ccc';
        dateElement.innerHTML = `Today in Ethiopian Calendar: <strong>${ethiopianDate}</strong>`;
        footer.appendChild(dateElement);
    }
}

window.addEventListener('load', function() {
    initEthiopianDateInFooter();
    
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    appointmentDate.valueAsDate = tomorrow;
    handleDateChange();
    
    phone.placeholder = "09XX XXX XXX or 011 XXXXXX";
});

window.addEventListener('beforeunload', function(e) {
    if (firstName.value || lastName.value || phone.value) {
        e.preventDefault();
        e.returnValue = 'You have unsaved appointment data. Are you sure you want to leave?';
    }
});
