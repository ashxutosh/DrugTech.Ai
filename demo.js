document.addEventListener('DOMContentLoaded', function() {
    const demoForm = document.getElementById('demoForm');
    const successMessage = document.getElementById('successMessage');
    const companySizeGroup = document.getElementById('companySizeGroup');
    const companyAffiliation = document.getElementById('companyAffiliation');
    const universityAffiliation = document.getElementById('universityAffiliation');
    const useCase = document.getElementById('useCase');
    const otherUseCaseGroup = document.getElementById('otherUseCaseGroup');
    
    // Toggle company size field visibility based on affiliation type
    companyAffiliation.addEventListener('change', function() {
        companySizeGroup.style.display = 'block';
        document.getElementById('companySize').setAttribute('required', 'required');
    });
    
    universityAffiliation.addEventListener('change', function() {
        companySizeGroup.style.display = 'none';
        document.getElementById('companySize').removeAttribute('required');
    });
    
    // Toggle other use case field visibility
    useCase.addEventListener('change', function() {
        if (this.value === 'other') {
            otherUseCaseGroup.style.display = 'block';
            document.getElementById('otherUseCase').setAttribute('required', 'required');
        } else {
            otherUseCaseGroup.style.display = 'none';
            document.getElementById('otherUseCase').removeAttribute('required');
        }
    });
    
    // Form submission handling
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission delay
        setTimeout(function() {
            // Show success message
            successMessage.classList.add('show');
            
            // Reset form
            demoForm.reset();
            companySizeGroup.style.display = 'none';
            otherUseCaseGroup.style.display = 'none';
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.classList.remove('show');
            }, 5000);
        }, 1000);
    });
});