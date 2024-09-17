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
  const [toEmailContactFormTag, setToEmailContactFormTag] = useState("");
  const [sitemapXmlTag, setSitemapXmlTag] = useState("");
  const [companyAddressTag, setCompanyAddressTag] = useState("");
  const [yelp, setYelp] = useState("")

  const phpCode = `

// Custom dynamic tag for GMB LINK
class My_GMB_Dynamic_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'gmb-link';
    }

    public function get_title() {
        return __( 'GMB LINK', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::URL_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${gmbLink}';
    }
}

// Custom dynamic tag for Company Phone Number 1
class My_Company_Phone_1_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'company-phone-1';
    }

    public function get_title() {
        return __( 'Company Phone Number 1', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::URL_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo 'tel:${phoneNumber1}';
    }
}

// Custom dynamic tag for Company Phone Number 2
class My_Company_Phone_2_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'company-phone-2';
    }

    public function get_title() {
        return __( 'Company Phone Number 2', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::URL_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo 'tel:${phoneNumber2}';
    }
}

// Custom dynamic tag for SMS Phone Number
class My_SMS_Phone_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'sms-phone';
    }

    public function get_title() {
        return __( 'SMS Phone Number', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::URL_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo 'sms:${smsPhone}';
    }
}

// Custom dynamic tag for Company Email
class My_Company_Email_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'company-email';
    }

    public function get_title() {
        return __( 'Company Email', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::URL_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo 'mailto:${companyEmail}';
    }
}

// Custom dynamic tag for Facebook
class My_Facebook_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'facebook';
    }

    public function get_title() {
        return __( 'Facebook', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::URL_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${facebookLink}';
    }
}

// Custom dynamic tag for Instagram
class My_Instagram_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'instagram';
    }

    public function get_title() {
        return __( 'Instagram', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::URL_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${instagramLink}';
    }
}

// Custom dynamic tag for Twitter
class My_Twitter_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'twitter';
    }

    public function get_title() {
        return __( 'Twitter', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::URL_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${twitterLink}';
    }
}

// Custom dynamic tag for TikTok
class My_TikTok_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'tiktok';
    }

    public function get_title() {
        return __( 'TikTok', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::URL_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${tiktokLink}';
    }
}

// Custom dynamic tag for Phone Number (Icon Box desc.)
class My_Phone_Number_Icon_Box_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'phone-number-icon-box';
    }

    public function get_title() {
        return __( 'Phone Number (Icon Box desc.)', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::TEXT_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '<a href="tel:${phoneNumber1}">${phoneNumber1}</a>';
    }
}


// Custom dynamic tag for Company Phone #1 Name
class My_Company_Phone_1_Name_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'company-phone-1-name';
    }

    public function get_title() {
        return __( 'Company Phone #1 Name', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::TEXT_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${phoneNumber1}';
    }
}

// Custom dynamic tag for Company Phone #2 Name
class My_Company_Phone_2_Name_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'company-phone-2-name';
    }

    public function get_title() {
        return __( 'Company Phone #2 Name', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::TEXT_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${phoneNumber2}';
    }
}

// Custom dynamic tag for SMS Phone # Name
class My_SMS_Phone_Name_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'sms-phone-name';
    }

    public function get_title() {
        return __( 'SMS Phone # Name', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::TEXT_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${smsPhone}';
    }
}

// Custom dynamic tag for Email (Icon Box desc.)
class My_Email_Icon_Box_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'email-icon-box';
    }

    public function get_title() {
        return __( 'Email (Icon Box desc.)', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::TEXT_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '<a href="${companyEmail}" />Send an email</a>';
    }
}

// Custom dynamic tag for SMS (Icon Box desc.)
class My_Text_Icon_Box_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'text-icon-box';
    }

    public function get_title() {
        return __( 'SMS (Icon Box desc.)', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::TEXT_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '<a href="sms:${smsPhone}">${smsPhone}</a>';
    }
}

// Custom dynamic tag for "To Email(s) Contact Form"
class My_To_Email_Contact_Form_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'to-email-contact-form';
    }

    public function get_title() {
        return __( 'To Email(s) Contact Form', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::TEXT_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${toEmailContactFormTag}';
    }
}

// Custom dynamic tag for "sitemap.xml"
class My_Sitemap_XML_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'sitemap-xml';
    }

    public function get_title() {
        return __( 'sitemap.xml', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::TEXT_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${sitemapXmlTag}/sitemap.xml';
    }
}

// Custom dynamic tag for Company Address
class My_Company_Address_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'company-address';
    }

    public function get_title() {
        return __( 'Company Address', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::TEXT_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${companyAddressTag}'; // Replace this with your actual company address
    }
}

// Custom dynamic tag for Yelp
class My_Yelp_Tag extends \\Elementor\\Core\\DynamicTags\\Tag {
    public function get_name() {
        return 'yelp';
    }

    public function get_title() {
        return __( 'Yelp', 'plugin-name' );
    }

    public function get_group() {
        return 'site';
    }

    public function get_categories() {
        return [ \\Elementor\\Modules\\DynamicTags\\Module::URL_CATEGORY ];
    }

    protected function register_controls() {}

    public function render() {
        echo '${yelp}';
    }
}


// Register the custom dynamic tags
add_action( 'elementor/dynamic_tags/register', function( $dynamic_tags ) {
    $dynamic_tags->register( new \\My_GMB_Dynamic_Tag() );
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
    $dynamic_tags->register( new \\My_Yelp_Tag() );
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
            placeholder="https://"
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
            placeholder="https://"
            onChange={(e) => setFacebookLink(e.target.value)}
          />
        </label>

        <label>
          Instagram Link:
          <input
            type="text"
            value={instagramLink}
            placeholder="https://"
            onChange={(e) => setInstagramLink(e.target.value)}
          />
        </label>

        <label>
          Twitter Link:
          <input
            type="text"
            value={twitterLink}
            placeholder="https://"
            onChange={(e) => setTwitterLink(e.target.value)}
          />
        </label>

        <label>
          TikTok Link:
          <input
            type="text"
            value={tiktokLink}
            placeholder="https://"
            onChange={(e) => setTiktokLink(e.target.value)}
          />
        </label>

        <label>
          Phone Number Icon Box Tag:
          <input
            type="text"
            value={phoneNumber1}
            // onChange={(e) => setPhoneNumberIconBoxTag(e.target.value)}
          />
        </label>

      <label>
          Company Phone 1 Name Tag:
          <input
            type="text"
            value={phoneNumber1}
            // onChange={(e) => setCompanyPhone1NameTag(e.target.value)}
          />
        </label>

        <label>
          Company Phone 2 Name Tag:
          <input
            type="text"
            value={phoneNumber2}
            // onChange={(e) => setCompanyPhone2NameTag(e.target.value)}
          />
        </label>

        <label>
          SMS Phone Number Name Tag:
          <input
            type="text"
            value={smsPhone}
            // onChange={(e) => setSmsPhoneNameTag(e.target.value)}
          />
        </label>

        <label>
          Email Icon Box Tag (icon box):
          <input
            type="text"
            value={companyEmail}
            // onChange={(e) => setEmailIconBoxTag(e.target.value)}
          />
        </label>

        <label>
          SMS Icon Box Tag (icon box):
          <input
            type="text"
            value={smsPhone}
            // onChange={(e) => setTextIconBoxTag(e.target.value)}
          />
        </label>

        <label>
          Contact form email(s) ( email1, email2 ):
          <input
            type="text"
            value={toEmailContactFormTag}
            onChange={(e) => setToEmailContactFormTag(e.target.value)}
          />
        </label>

        <label>
          Sitemap XML Tag:
          <input
            type="text"
            value={sitemapXmlTag}
            placeholder="full domain: http://www.nakeddomain.com"
            onChange={(e) => setSitemapXmlTag(e.target.value)}
          />
        </label>

        <label>
          Company Address Tag:
          <input
            type="text"
            placeholder="company address"
            value={companyAddressTag}
            onChange={(e) => setCompanyAddressTag(e.target.value)}
          />
        </label>
        <label>
          Yelp:
          <input
            type="text"
            placeholder="https://"
            value={yelp}
            onChange={(e) => setYelp(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCopy}>Copy PHP Code</button>
      <h2>Generated PHP Code:</h2>
      <pre>{phpCode}</pre>

      <button onClick={handleCopy}>Copy PHP Code</button>
    </div>
  );
}
// test again
export default App;
