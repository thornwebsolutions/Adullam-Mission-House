import { jsPDF } from 'jspdf';

function generateRegistrationPDF(data) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const bottomMargin = 25;
  let y = 20;

  const checkPage = (needed = 15) => {
    if (y + needed > pageHeight - bottomMargin) {
      doc.addPage();
      y = 20;
    }
  };

  const addHeading = (text) => {
    checkPage();
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(166, 93, 55); // terracotta
    doc.text(text, pageWidth / 2, y, { align: 'center' });
    y += 10;
  };

  const addSectionTitle = (text) => {
    checkPage(25);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(92, 64, 51); // brown-deep
    doc.text(text, 20, y);
    y += 2;
    doc.setDrawColor(122, 154, 107); // sage-green
    doc.line(20, y, pageWidth - 20, y);
    y += 7;
  };

  const addField = (label, value) => {
    checkPage();
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(61, 50, 41); // text-dark
    doc.text(`${label}:`, 25, y);
    doc.setFont('helvetica', 'normal');
    doc.text(value || 'N/A', 90, y);
    y += 7;
  };

  // Title
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(166, 93, 55);
  doc.text('H. Roscoe University', pageWidth / 2, y, { align: 'center' });
  y += 8;
  addHeading('Registration Form');
  y += 5;

  // Date
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(107, 93, 82);
  doc.text(`Submitted: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth / 2, y, { align: 'center' });
  y += 12;

  // Personal Information
  addSectionTitle('Personal Information');
  addField('First Name', data.firstName);
  addField('Middle Name', data.middleName);
  addField('Last Name', data.lastName);
  addField('Maiden Name', data.maidenName);
  addField('Email', data.email);
  y += 3;

  // Mailing Address
  addSectionTitle('Mailing Address');
  addField('Street', data.street);
  addField('City/Town', data.city);
  addField('State', data.state);
  addField('Zip Code', data.zip);
  addField('Contact Number', data.contactPhone);
  y += 3;

  // Personal Data
  addSectionTitle('Personal Data');
  addField('Marital Status', data.maritalStatus);
  y += 3;

  // Educational Background
  addSectionTitle('Educational Background');
  addField('High School', data.highSchool);
  addField('City/State', data.hsCity);
  addField('Graduation Date', data.hsGradDate);
  addField('College/University', data.college);
  addField('College City/State', data.collegeCity);
  addField('Major', data.major);
  addField('Degree Earned', data.degree);
  y += 3;

  // Church Affiliation
  addSectionTitle('Church Affiliation');
  addField('Name of Church', data.churchName);
  addField("Pastor's Name", data.pastorName);
  addField('Attends Regularly', data.attendRegularly);
  addField('Member', data.isMember);
  y += 3;

  // Enrollment Details
  addSectionTitle('Enrollment Details');
  addField('Program', 'Certificate - Pastoral Care');
  addField('Class Format', data.classFormat);
  addField('Payment Method', data.paymentMethod);
  y += 5;

  // Registration Fee
  checkPage(20);
  doc.setFillColor(243, 237, 231); // stone-light
  doc.rect(20, y, pageWidth - 40, 12, 'F');
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(166, 93, 55);
  doc.text('Registration Fee: $90.00', pageWidth / 2, y + 8, { align: 'center' });

  // Return base64
  return doc.output('arraybuffer');
}

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { firstName, lastName, email, message, formType, website } = req.body;

  // Honeypot check - if this field has a value, it's likely a bot
  if (website) {
    // Silently accept but don't send email
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  }

  // Build email content based on form type
  let subject, htmlContent, attachments;

  if (formType === 'registration') {
    const {
      middleName, maidenName, street, city, state, zip,
      contactPhone, maritalStatus, highSchool, hsCity,
      hsGradDate, college, collegeCity, major, degree, churchName,
      pastorName, attendRegularly, isMember, classFormat, paymentMethod
    } = req.body;

    subject = 'New Pastoral Care Course Registration - Adullam Mission House';
    htmlContent = `
      <h2>New Pastoral Care Course Registration</h2>
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${firstName} ${middleName || ''} ${lastName} ${maidenName ? '(Maiden: ' + maidenName + ')' : ''}</p>
      <p><strong>Email:</strong> ${email}</p>
      <h3>Mailing Address</h3>
      <p>${street || ''}<br>${city || ''}, ${state || ''} ${zip || ''}</p>
      <p><strong>Contact Number:</strong> ${contactPhone || 'N/A'}</p>
      <h3>Personal Data</h3>
      <p><strong>Marital Status:</strong> ${maritalStatus || 'N/A'}</p>
      <h3>Educational Background</h3>
      <p><strong>High School:</strong> ${highSchool || 'N/A'} - ${hsCity || ''} (Graduated: ${hsGradDate || 'N/A'})</p>
      <p><strong>College:</strong> ${college || 'N/A'} - ${collegeCity || ''}</p>
      <p><strong>Major:</strong> ${major || 'N/A'} | <strong>Degree:</strong> ${degree || 'N/A'}</p>
      <h3>Church Affiliation</h3>
      <p><strong>Church:</strong> ${churchName || 'N/A'}</p>
      <p><strong>Pastor:</strong> ${pastorName || 'N/A'}</p>
      <p><strong>Attends Regularly:</strong> ${attendRegularly || 'N/A'}</p>
      <p><strong>Member:</strong> ${isMember || 'N/A'}</p>
      <h3>Enrollment Details</h3>
      <p><strong>Program:</strong> Certificate - Pastoral Care</p>
      <p><strong>Class Format:</strong> ${classFormat || 'N/A'}</p>
      <p><strong>Payment Method:</strong> ${paymentMethod || 'N/A'}</p>
      <p><strong>Agreed to Terms:</strong> Yes</p>
    `;

    // Generate PDF of the filled-out form
    const pdfBuffer = generateRegistrationPDF(req.body);
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');
    attachments = [{
      filename: `Registration-${firstName}-${lastName}.pdf`,
      content: pdfBase64
    }];
  } else if (formType === 'newsletter') {
    subject = 'New Newsletter Subscription - Adullam Mission House';
    htmlContent = `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${email}</p>
    `;
  } else {
    subject = 'New Contact Form Submission - Adullam Mission House';
    htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@amissionhouse.com',
        to: 'h.roscoe.university@moodle.aamig.org',
        subject: subject,
        html: htmlContent,
        ...(attachments && { attachments }),
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } else {
      const error = await response.json();
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
