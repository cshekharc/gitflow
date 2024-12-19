import { doctorPage } from './pages/doctorsPage';
import { utils } from './utils/utils';
import doctorData from '../fixtures/doctorsData.json';
import { homePage } from './pages/homePage';

describe('Doctor Management', () => {
  beforeEach(() => {
    utils.visit();
    homePage.clickOnTab('/doctors', 'Doctors')
  });

  it('should add a new doctor successfully', () => {
    const doctor = {
      name: utils.generateRandomName(),
      email: 'test@test.com',
      phone: '12345678901012',
      edu : 'MBBS'
    };

    doctorPage.clickAddDoctor();
    doctorPage.fillDoctorDetails(doctor);
    doctorPage.saveDoctor();
    cy.wait(5000)
    doctorPage.clickOnDoctor();
    //doctorPage.validateDoctorName(doctor.name)
  });

  it('should fail to add a doctor with invalid data', () => {
    // const invalidDoctor = doctorData.invalidDoctor;

    doctorPage.clickAddDoctor();
    // doctorPage.clickAddDoctor();
    // doctorPage.fillDoctorDetails(invalidDoctor);
    doctorPage.saveDoctor();
    doctorPage.validateNameError();
  });
});
