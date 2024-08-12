import React, { useState } from 'react';

function App() {
  const [phoneNumber1, setPhoneNumber1] = useState('123-456-7890');
  const [phoneNumber2, setPhoneNumber2] = useState('123-456-7890');
  const [smsPhone, setSmsPhone] = useState('123-456-7890');
  const [companyEmail, setCompanyEmail] = useState('example@gmail.com');
  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [tiktokLink, setTiktokLink] = useState('');

  const phpCode = `
<?php 
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
        echo 'https://www.google.com/maps/place/Hozio/@40.7852334,-73.1245822,15z/data=!4m2!3m1!1s0x0:0xa869db6fac2eab4f?sa=X&ved=1t:2428&ictx=111';
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
        echo 'tel:${smsPhone}';
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
});

?>
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(phpCode);
    alert('PHP code copied to clipboard!');
  };

  return (
    <div className="App">
      <h1>PHP Dynamic Tag Generator</h1>
      
      <label>
        Company Phone Number 1:
        <input 
          type="text" 
          value={phoneNumber1}
          onChange={(e) => setPhoneNumber1(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Company Phone Number 2:
        <input 
          type="text" 
          value={phoneNumber2}
          onChange={(e) => setPhoneNumber2(e.target.value)}
        />
      </label>
      <br/>
      <label>
        SMS Phone Number:
        <input 
          type="text" 
          value={smsPhone}
          onChange={(e) => setSmsPhone(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Company Email:
        <input 
          type="email" 
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Facebook Link:
        <input 
          type="text" 
          value={facebookLink}
          onChange={(e) => setFacebookLink(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Instagram Link:
        <input 
          type="text" 
          value={instagramLink}
          onChange={(e) => setInstagramLink(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Twitter Link:
        <input 
          type="text" 
          value={twitterLink}
          onChange={(e) => setTwitterLink(e.target.value)}
        />
      </label>
      <br/>
      <label>
        TikTok Link:
        <input 
          type="text" 
          value={tiktokLink}
          onChange={(e) => setTiktokLink(e.target.value)}
        />
      </label>
      <br/>

      <h2>Generated PHP Code:</h2>
      <pre>
        {phpCode}
      </pre>
      
      <button onClick={handleCopy}>Copy PHP Code</button>
    </div>
  );
}
// test
export default App;
