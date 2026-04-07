
function successAlert() {
    Swal.fire("Success!", "Your data saved successfully.", "success");
}

function errorAlert() {
    Swal.fire("Error!", "Something went wrong.", "error");
}

function warningAlert() {
    Swal.fire("Warning!", "Please check your input.", "warning");
}

function infoAlert() {
    Swal.fire("Info", "This is an information message.", "info");
}

function confirmAlert() {
    Swal.fire({
        title: "Are you sure?",
        text: "You can't undo this action!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Done!", "Action confirmed.", "success");
        }
    });
}

function loginAlert() {
    Swal.fire({
        title: "Login Successful",
        text: "Welcome back!",
        icon: "success",
        confirmButtonText: "Continue"
    });
}

function deleteAlert() {
    Swal.fire({
        title: "Delete File?",
        text: "This file will be permanently deleted!",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Delete"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Deleted!", "File removed.", "success");
        }
    });
}

function timerAlert() {
    let timerInterval
    Swal.fire({
        title: "Auto close alert!",
        html: "Closing in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    })
}

function toastAlert() {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Saved successfully',
        showConfirmButton: false,
        timer: 3000
    })
}

function loadingAlert() {
    Swal.fire({
        title: 'Loading...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    })
    setTimeout(() => {
        Swal.close()
        Swal.fire("Done!", "Data loaded.", "success")
    }, 2000)
}

