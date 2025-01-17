% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/GeoLift.R
\name{absolute_value.plot}
\alias{absolute_value.plot}
\title{Daily Incrementality or ATT plot function for GeoLift output.}
\usage{
absolute_value.plot(
  GeoLift,
  plot_type = "ATT",
  treatment_end_date = NULL,
  frequency = "daily",
  plot_start_date = NULL,
  title = "",
  subtitle = "",
  notes = "",
  ...
)
}
\arguments{
\item{GeoLift}{GeoLift object.}

\item{plot_type}{Can be either ATT or Incrementality.  Defaults to ATT.}

\item{treatment_end_date}{Character that represents a date in year-month-day format.}

\item{frequency}{Character that represents periodicity of time stamps. Can be either
weekly or daily. Defaults to daily.}

\item{plot_start_date}{Character that represents initial date of plot in year-month-day format.}

\item{title}{Character for the title of the plot. NULL by default.}

\item{subtitle}{Character for the subtitle of the plot. NULL by default.}

\item{notes}{String to add notes to the plot. Empty by default.}

\item{...}{additional arguments}
}
\value{
Daily Incremental or ATT plot.
}
\description{
\code{absolute_value.plot} returns chart for daily absolute values using GeoLift output.
}
