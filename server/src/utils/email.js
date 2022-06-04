import nodemailer from "nodemailer";

export default async function sendEmail(email) {
	const transporter = nodemailer.createTransport({
		host: "smtp.mail.yahoo.com",
		port: 465,
		service: "yahoo",
		secure: false,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORDYAHOO,
		},
		debug: false,
		logger: true,
	});

	const mailOptions = {
		from: process.env.EMAIL,
		to: email,
		subject: "Dziękujemy za dodanie artykułu",
		html: `
		<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
			<tbody>
				<tr>
					<td align="center">
						<table
							class="col-600"
							width="600"
							border="0"
							align="center"
							cellpadding="0"
							cellspacing="0"
						>
							<tbody>
								<tr>
									<td
										align="center"
										valign="top"
										bgcolor="#414858"
										style="background-size: cover; background-position: top"
									>
										<table
											class="col-600"
											width="600"
											height="200"
											border="0"
											align="center"
											cellpadding="0"
											cellspacing="0"
										>
											<tbody>
												<tr>
													<td height="40"></td>
												</tr>
												<tr>
													<td align="center" style="line-height: 0px">
													</td>
												</tr>
												<tr>
													<td
														align="center"
														style="
															font-family: 'Raleway', sans-serif;
															font-size: 37px;
															color: #ffffff;
															line-height: 24px;
															font-weight: bold;
															letter-spacing: 5px;
														"
													>
													CZEŚĆ!
													</td>
												</tr>
												<tr>
													<td
														align="center"
														style="
															font-family: 'Lato', sans-serif;
															font-size: 15px;
															color: #ffffff;
															line-height: 24px;
															font-weight: 300;
														"
													>
														Fajnie, że jesteś!
													</td>
												</tr>
												<tr>
													<td height="50"></td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr>
					<td align="center">
						<table
							class="col-600"
							width="600"
							border="0"
							align="center"
							cellpadding="0"
							cellspacing="0"
							style="
								margin-left: 20px;
								margin-right: 20px;
								border-left: 1px solid #dbd9d9;
								border-right: 1px solid #dbd9d9;
							"
						>
							<tbody>
								<tr>
									<td height="35"></td>
								</tr>
								<tr>
									<td
										align="center"
										style="
											font-family: 'Raleway', sans-serif;
											font-size: 22px;
											font-weight: bold;
											color: #333;
										"
									>
										Dziękujemy za dodanie artykułu do naszej bazy
									</td>
								</tr>
								<tr>
									<td height="10"></td>
								</tr>
								<tr>
									<td
										align="center"
										style="
											font-family: 'Lato', sans-serif;
											font-size: 14px;
											color: #757575;
											line-height: 24px;
											font-weight: 300;
											border-bottom: 1px solid grey;
											padding-bottom: 1em;
										"
									>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>`,
	};

	try {
		await transporter.sendMail(mailOptions);
		return "Mail has been sent!";
	} catch {
		return "Something is wrong!";
	}
}
