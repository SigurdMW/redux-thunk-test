import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Plan from '../../components/Plan'

describe('Plan suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Plan />).contains([
    	<li className="checked">Profile pic</li>,
			<li className="checked">Name</li>,
			<li className="checked">Username</li>,
			<li>Stats</li>,
			<li className="checked">Repos</li>]))
		.toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Plan />).find('.checked').length).toBeGreaterThanOrEqual(0);
  });
});