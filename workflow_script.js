import yaml from "js-yaml";
import fs from "fs";

const workflow = {
    name: 'CI',
    on: {
        push: { branches: ['main'] }
    },
    jobs: {
        build: {
            'runs-on': 'ubuntu-latest',
            steps: [
                {
                    name: "check the folders in the root directory",
                    run: ['cd /', 'ls -ltr'].join('\n')
                }
            ]
        }
    }
};

fs.writeFileSync('.github/workflows/ci.yml', yaml.dump(workflow));