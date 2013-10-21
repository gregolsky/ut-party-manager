
angular.module('ut.mock', ['ut.config'])
    .run(function($httpBackend, useHttpMocks){
      if (useHttpMocks){

		$httpBackend
            .whenGET(/^\/?party\/?\?id=1/)
            .respond(200, JSON.stringify(utMock.parties[0]));
            
		$httpBackend
            .whenGET(/^\/?party\/?\?id=2/)
            .respond(200, JSON.stringify(utMock.parties[1]));            
        
        $httpBackend
            .when('GET', /^\/?party\/?/, '{"isArray":true}')
            .respond(200, JSON.stringify(utMock.parties));
            //.respond(200, '[ ]');
            
		$httpBackend
            .whenPOST(/^\/?party\/?/, '{"isArray":false}')
            .respond(200, '{ "name": "test", "points": "1000", "nature": "Good", "id": 1 }');
            
		// $httpBackend
            // .whenPOST(/^party\/1/)
            // .respond(200, '{ "name": "test", "points": "1000", "nature": "Good", "id": 1 }');

        $httpBackend
            .whenGET(/^views\/*\/*/)
            .passThrough();  

        $httpBackend
            .whenGET(/^views\/.*/)
            .passThrough();
          
        $httpBackend
            .whenGET(/^views\/.*\/.*\/.*/)
            .passThrough();          
      }
    });

