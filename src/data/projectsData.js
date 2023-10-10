import eight from '../assets/svg/projects/eight.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import eleven from '../assets/svg/projects/eleven.svg'
import two from '../assets/svg/projects/two.svg'
import seven from '../assets/svg/projects/seven.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'KartnGo',
        projectDesc: 'KartnGo is a user-friendly web application designed to revolutionize the way customers shop for groceries.',
        tags: ['AWS', 'AWS CloudFormation','Node JS', 'React'],
        code: 'https://github.com/Parshva00/KartnGo',
        demo: '',
        image: five
    },
    {
        id: 2,
        projectName: 'Pet Radar',
        projectDesc: 'Android app that helps in finding lost pets in the surroundings.',
        tags: ['Springboot', 'Java', 'MySQL', 'Git'],
        code: 'https://github.com/Parshva00/PetRadar',
        demo: '',
        image: six
    },
    {
        id: 3,
        projectName: 'TripnGo',
        projectDesc: 'Embark on a journey of discovery with TripnGo, a captivating website that redefines the way you experience travel and exploration.',
        tags: [ 'MongoDB', 'Express','React','Node JS','Material Ui' ],
        code: 'https://github.com/Parshva00/TripnGo',
        demo: 'https://incandescent-flan-2c4d6d.netlify.app/',
        image: eight
    },
    {
        id: 4,
        projectName: 'Trivia Titans',
        projectDesc: 'Multi-Cloud Serverless Collaborative Trivia Challenge Game.',
        tags: ['AWS', 'React', 'Node JS', 'GCP'],
        code: 'https://github.com/Parshva00/TriviaTitans',
        demo: '',
        image: eleven
    },
    {
        id: 5,
        projectName: 'Data Processing Pipeline',
        projectDesc: 'Developed an event-driven serverless application using AWS Lambda, S3, and DynamoDB, resulting in a 30% reduction in data processing time compared to traditional methods.',
        tags: [ 'AWS','Node JS'],
        code: '',
        demo: '',
        image: seven
    },
    {
        id: 6,
        projectName: 'Cloud-Native CI/CD Pipeline Deployment on Google Kubernetes Engine',
        projectDesc: 'Developed a cloud-native application on Google Cloud Platform (GCP) using Docker, CI/CD pipeline, and Google Kubernetes Engine (GKE).',
        tags: ['GCP', 'Docker', 'Terraform'],
        code: '',
        demo: '',
        image: two
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/