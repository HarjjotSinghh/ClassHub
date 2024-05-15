import { Title, Text, Button, Container } from '@mantine/core';
import Dots from '../components/dots';
import classes from './index-page.module.css';
import { Link } from 'react-router-dom';
import { Card, CardSection } from '@mantine/core';

export default function IndexPage() {
    // return (
    //     <Container className={classes.wrapper} size={1400}>
    //         <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
    //         <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
    //         <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
    //         <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

    //         <div className={classes.inner}>
    //             <Title className="text-center">
    //                 Industry experience, now only a {' '}
    //                 <span className="text-[var(--mantine-color-purple-5)]">
    //                     few clicks
    //                 </span>{' '}
    //                 away.
    //             </Title>

    //             <Container mt={12} p={0} size={600}>
    //                 <Text size="lg" c="dimmed" className={classes.description}>
    //                 Gain real-world skills and experience by tackling challenges posted by various industy level businesses and organizations.
    //                 </Text>
    //             </Container>

    //             <div className="flex justify-center items-center mt-6 gap-4">
    //                 <Link to="/login">
    //                     <Button className={classes.control} size="md" variant="light" color="gray">
    //                         Get Started
    //                     </Button>
    //                 </Link>
    //                 <Link to={"/tasks"}>
    //                     <Button variant='filled' className={classes.control} size="md">
    //                         Browse Tasks
    //                     </Button>
    //                 </Link>
    //             </div>
    //         </div>
    //     </Container>
    // );

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Container className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                                    Streamline Your Class Management
                                </h1>
                                <p className="mx-auto max-w-[700px] text-foreground/60 md:text-xl dark:text-foreground/80">
                                    ClassHub is the all-in-one platform for teachers to track attendance, grade assignments, and
                                    communicate with students and parents.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 w-full"
                                    href="login"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Key Features
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Class Management</h2>
                                <p className="max-w-[900px] text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-foreground/80">
                                    ClassHub provides the tools you need to effortlessly manage your classroom, from attendance tracking
                                    to grading and communication.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Attendance Tracking</h3>
                                <p className="text-sm text-foreground/60 dark:text-foreground/80">
                                    Easily track student attendance and generate reports.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Grading and Feedback</h3>
                                <p className="text-sm text-foreground/60 dark:text-foreground/80">
                                    Grade assignments and provide detailed feedback to students.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Communication Tools</h3>
                                <p className="text-sm text-foreground/60 dark:text-foreground/80">
                                    Easily communicate with students and parents through the platform.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Lesson Planning</h3>
                                <p className="text-sm text-foreground/60 dark:text-foreground/80">
                                    Create and manage your lesson plans all in one place.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Student Progress Tracking</h3>
                                <p className="text-sm text-foreground/60 dark:text-foreground/80">
                                    Monitor student progress and identify areas for improvement.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Customizable Dashboards</h3>
                                <p className="text-sm text-foreground/60 dark:text-foreground/80">
                                    Personalize your dashboard to suit your teaching needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Teachers Are Saying</h2>
                            <p className="mx-auto max-w-[600px] text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-foreground/80">
                                Hear from teachers who have transformed their classrooms with ClassHub.
                            </p>
                        </div>
                        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardSection className="lg:p-6 p-4 space-y-4">
                                    <blockquote className="text-lg font-semibold leading-snug">
                                        “ClassHub has been a game-changer for my classroom. The attendance tracking and grading features
                                        have saved me so much time.”
                                    </blockquote>
                                    <div>
                                        <div className="font-semibold">Sarah Johnson</div>
                                        <div className="text-sm text-foreground/60 dark:text-foreground/80">Math Teacher, Acme High School</div>
                                    </div>
                                </CardSection>
                            </Card>
                            <Card>
                                <CardSection className="lg:p-6 p-4 space-y-4">
                                    <blockquote className="text-lg font-semibold leading-snug">
                                        “I love how easy it is to communicate with parents through ClassHub. The platform has really
                                        improved my relationship with families.”
                                    </blockquote>
                                    <div>
                                        <div className="font-semibold">Michael Lee</div>
                                        <div className="text-sm text-foreground/60 dark:text-foreground/80">English Teacher, Acme Middle School</div>
                                    </div>
                                </CardSection>
                            </Card>
                            <Card>
                                <CardSection className="lg:p-6 p-4 space-y-4">
                                    <blockquote className="text-lg font-semibold leading-snug">
                                        “ClassHub has streamlined my lesson planning and grading workflow. I can{"'"}t imagine teaching
                                        without it now.”
                                    </blockquote>
                                    <div>
                                        <div className="font-semibold">Emily Chen</div>
                                        <div className="text-sm text-foreground/60 dark:text-foreground/80">Science Teacher, Acme High School</div>
                                    </div>
                                </CardSection>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Ready to Streamline Your Class Management?
                            </h2>
                            <p className="mx-auto max-w-[600px] text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-foreground/80">
                                Sign up for ClassHub today and transform the way you manage your classroom.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <form className="flex justify-center items-center w-full">
                                <a href="/login" ><Button className='w-full' size='lg'>Get Started</Button></a>
                            </form>
                            <p className="text-xs text-foreground/60 dark:text-foreground/80">
                                Sign up to start your free trial.
                                <Link className="underline underline-offset-2" href="#">
                                    Terms & Conditions Apply
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}