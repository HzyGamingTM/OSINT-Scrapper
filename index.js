const process = require("node:process");
const pkg = require("pkg");

class Program {
    arguments;

    init() {
		
    }

    parseArguments() {
        let args = process.argv;
        if (args.length < 3) {
            console.error("[Error]: No Arguments Found. Exiting.");
            exit(0);
        }

        for (let i = 2; i < args.length; i++) {
            switch (args[i]) {
                case "-u":
					if (args.length < i + 2) {
						console.error("[Error]: Invalid argument. Missing value!");
						console.log("Usage: -u username123");
						exit(0);
					}

					arguments.username = args[i+1];
                    break;
                
				case "-d":
					if (args.length < i + 2) {
						console.error("[Error]: Invalid argument. Missing value!");
						console.log("Usage: -d http://www.example.com");
						exit(0);
					}

					// TODO: Domain Checking Logic

					arguments.domain = args[i+1];
                    break;
                
				case "-e":
					if (args.length < i + 2) {
						console.error("[Error]: Invalid argument. Missing value!");
						console.log("Usage: -e username@gmail.com");
						exit(0);
					}

					arguments.email = args[i+1];
					break;
                
				case "-p":
                    if (args.length < i + 2) {
						console.error("[Error]: Invalid argument. Missing value!");
						console.log("Usage: -p \"+123 12345678\"");
						exit(0);
					}
					
					arguments.phoneNumber = args[i+1];
					break;
                
				case "-ip":
					if (args.length < i + 2) {
						console.error("[Error]: Invalid argument. Missing value!");
						console.log("Usage: -ip 127.0.0.1");
						exit(0);
					}
                    
					arguments.ipAddress = args[i+1];
					break;
                
				case "-j":
					if (args.length < i + 2) {
						console.error("[Error]: Invalid argument. Missing value!");
						console.log("Usage: -j \"Software Engineer\"");
						exit(0);
					}

					arguments.job = args[i+1];
					break;
				
				case "-b":
					if (args.length < i + 2) {
						console.error("[Error]: Invalid argument. Missing value!");
						console.log("Usage: -b \"Worked at Google\"");
						exit(0);
					}

					arguments.history = args[i+1];
                    break;
				
				default: // Resort to default args layout: -u -d -e -p -ip -j -b

					break;
            }
        }
    }
}


/*
CMD Line Arguments:
Username, Domain, Email Addresses, Phone Numbers, IPs, Job Occupation & History
-u -d -e -p -ip -j -b
*/