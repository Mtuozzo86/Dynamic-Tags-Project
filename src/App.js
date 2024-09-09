import React, { useState } from "react";
import "./App.css";

function App() {
  const [gmbLink, setGmbLink] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [smsPhone, setSmsPhone] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [tiktokLink, setTiktokLink] = useState("");
  const [phoneNumberIconBoxTag, setPhoneNumberIconBoxTag] = useState("");
  const [companyPhone1NameTag, setCompanyPhone1NameTag] = useState("");
  const [companyPhone2NameTag, setCompanyPhone2NameTag] = useState("");
  const [smsPhoneNameTag, setSmsPhoneNameTag] = useState("");
  const [emailIconBoxTag, setEmailIconBoxTag] = useState("");
  const [textIconBoxTag, setTextIconBoxTag] = useState("");
  const [toEmailContactFormTag, setToEmailContactFormTag] = useState("");
  const [sitemapXmlTag, setSitemapXmlTag] = useState("");
  const [companyAddressTag, setCompanyAddressTag] = useState("");

  // Function to generate PHP class for a dynamic tag
  const generatePhpClass = (name, title, category, content) => `
    class My_${name}_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
        public function get_name() {
            return '${name.toLowerCase()}';
        }
    
        public function get_title() {
            return __( '${title}', 'plugin-name' );
        }
    
        public function get_group() {
            return 'site';
        }
    
        public function get_categories() {
            return [ \\Elementor\\Modules\\DynamicTags\\Module::${category}_CATEGORY ];
        }
    
        protected function register_controls() {}
    
        public function render() {
            echo '${content}';
        }
    }
  `;

  // Generate the full PHP code with all tags
  const phpCode = `
    ${generatePhpClass('GMB_Link', 'GMB LINK', 'URL', gmbLink)}
    ${generatePhpClass('Company_Phone_1', 'Company Phone Number 1', 'URL', `tel:${phoneNumber1}`)}
    ${generatePhpClass('Company_Phone_2', 'Company Phone Number 2', 'URL', `tel:${phoneNumber2}`)}
    ${generatePhpClass('SMS_Phone', 'SMS Phone Number', 'URL', `sms:${smsPhone}`)}
    ${generatePhpClass('Company_Email', 'Company Email', 'URL', `mailto:${companyEmail}`)}
    ${generatePhpClass('Facebook', 'Facebook', 'URL', facebookLink)}
    ${generatePhpClass('Instagram', 'Instagram', 'URL', instagramLink)}
    ${generatePhpClass('Twitter', 'Twitter', 'URL', twitterLink)}
    ${generatePhpClass('TikTok', 'TikTok', 'URL', tiktokLink)}
    ${generatePhpClass('Phone_Number_Icon_Box', 'Phone Number (Icon Box desc.)', 'TEXT', `<a href="tel:${phoneNumber1}">${phoneNumber1}</a>`)}
    ${generatePhpClass('Company_Phone_1_Name', 'Company Phone #1 Name', 'TEXT', `Call: ${companyPhone1NameTag}`)}
    ${generatePhpClass('Company_Phone_2_Name', 'Company Phone #2 Name', 'TEXT', `Call: ${companyPhone2NameTag}`)}
    ${generatePhpClass('SMS_Phone_Name', 'SMS Phone # Name', 'TEXT', `Text: ${smsPhoneNameTag}`)}
    ${generatePhpClass('Email_Icon_Box', 'Email (Icon Box desc.)', 'TEXT', `<a href="mailto:${emailIconBoxTag}">Send an email ></a>`)}
    ${generatePhpClass('Text_Icon_Box', 'SMS (Icon Box desc.)', 'TEXT', `<a href="sms:${textIconBoxTag}">${textIconBoxTag}</a>`)}
    ${generatePhpClass('To_Email_Contact_Form', 'To Email(s) Contact Form', 'TEXT', toEmailContactFormTag)}
    ${generatePhpClass('Sitemap_XML', 'sitemap.xml', 'TEXT', `${sitemapXmlTag}/sitemap.xml`)}
    ${generatePhpClass('Company_Address', 'Company Address', 'TEXT', companyAddressTag)}
  
    // Register the custom dynamic tags
    add_action( 'elementor/dynamic_tags/register', function( $dynamic_tags ) {
      $dynamic_tags->register( new \\My_GMB_Link_Tag() );
      $dynamic_tags->register( new \\My_Company_Phone_1_Tag() );
      $dynamic_tags->register( new \\My_Company_Phone_2_Tag() );
      $dynamic_tags->register( new \\My_SMS_Phone_Tag() );
      $dynamic_tags->register( new \\My_Company_Email_Tag() );
      $dynamic_tags->register( new \\My_Facebook_Tag() );
      $dynamic_tags->register( new \\My_Instagram_Tag() );
      $dynamic_tags->register( new \\My_Twitter_Tag() );
      $dynamic_tags->register( new \\My_TikTok_Tag() );
      $dynamic_tags->register( new \\My_Phone_Number_Icon_Box_Tag() );
      $dynamic_tags->register( new \\My_Company_Phone_1_Name_Tag() );
      $dynamic_tags->register( new \\My_Company_Phone_2_Name_Tag() );
      $dynamic_tags->register( new \\My_SMS_Phone_Name_Tag() );
      $dynamic_tags->register( new \\My_Email_Icon_Box_Tag() );
      $dynamic_tags->register( new \\My_Text_Icon_Box_Tag() );
      $dynamic_tags->register( new \\My_To_Email_Contact_Form_Tag() );
      $dynamic_tags->register( new \\My_Sitemap_XML_Tag() );
      $dynamic_tags->register( new \\My_Company_Address_Tag() );
    });
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(phpCode);
    alert("PHP code copied to clipboard!");
  };

  return (
    <div className="App">
      <h1>PHP Dynamic Tag Generator</h1>
      <div className="input-fields">
        <label>
          GMB Link:
          <input
            type="text"
            value={gmbLink}
            onChange={(e) => setGmbLink(e.target.value)}
          />
        </label>

        <label>
          Company Phone Number 1:
          <input
            type="text"
            value={phoneNumber1}
            onChange={(e) => setPhoneNumber1(e.target.value)}
          />
        </label>

        <label>
          Company Phone Number 2:
          <input
            type="text"
            value={phoneNumber2}
            onChange={(e) => setPhoneNumber2(e.target.value)}
          />
        </label>

        <label>
          SMS Phone Number:
          <input
            type="text"
            value={smsPhone}
            onChange={(e) => setSmsPhone(e.target.value)}
          />
        </label>

        <label>
          Company Email:
          <input
            type="email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
        </label>

        <label>
          Facebook Link:
          <input
            type="text"
            value={facebookLink}
            onChange={(e) => setFacebookLink(e.target.value)}
          />
        </label>

        <label>
          Instagram Link:
          <input
            type="text"
            value={instagramLink}
            onChange={(e) => setInstagramLink(e.target.value)}
          />
        </label>

        <label>
          Twitter Link:
          <input
            type="text"
            value={twitterLink}
            onChange={(e) => setTwitterLink(e.target.value)}
          />
        </label>

        <label>
          TikTok Link:
          <input
            type="text"
            value={tiktokLink}
            onChange={(e) => setTiktokLink(e.target.value)}
          />
        </label>

        <label>
          Phone Number Icon Box Tag:
          <input
            type="text"
            value={phoneNumberIconBoxTag}
            onChange={(e) => setPhoneNumberIconBoxTag(e.target.value)}
          />
        </label>

        <label>
          Company Phone 2 Name Tag:
          <input
            type="text"
            value={companyPhone2NameTag}
            onChange={(e) => setCompanyPhone2NameTag(e.target.value)}
          />
        </label>

        <label>
          SMS Phone Number Name Tag:
          <input
            type="text"
            value={smsPhoneNameTag}
            onChange={(e) => setSmsPhoneNameTag(e.target.value)}
          />
        </label>

        <label>
          Email Icon Box Tag (HTML):
          <input
            type="text"
            value={emailIconBoxTag}
            onChange={(e) => setEmailIconBoxTag(e.target.value)}
          />
        </label>

        <label>
          Sitemap XML Tag:
          <input
            type="text"
            value={sitemapXmlTag}
            onChange={(e) => setSitemapXmlTag(e.target.value)}
          />
        </label>

        <label>
          Company Address Tag:
          <input
            type="text"
            value={companyAddressTag}
            onChange={(e) => setCompanyAddressTag(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCopy}>Copy PHP Code</button>
    </div>
  );
}

export default App;
